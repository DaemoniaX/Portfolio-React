import "../css/Backend.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';//pour mettre des bouts de code : npm install react-syntax-highlighter
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


function Backend() {

  const codeProductsController = `
  
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Data.SqlClient;
    using BackendAngular2.Models;
    using System.Data;

    namespace BackendAngular2.Controllers
    {
        [ApiController]
        [Route("api/[controller]")]
        public class ProductsController : ControllerBase
        {
            private readonly string _connectionString;
            //on récupère la connection string définitive dans Program.cs
            public ProductsController(DatabaseConfig dbConfig)
            {
                _connectionString = dbConfig.ConnectionString;
            }

            [HttpGet]
            public IActionResult Get()
            {
                var products = new List<Products>();
                string query = "SELECT id, title, price, image, stock FROM dbo.Products";

                try
                {
                    using (var con = new SqlConnection(_connectionString))
                    using (var cmd = new SqlCommand(query, con))
                    {
                        con.Open();
                        using (var reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                products.Add(new Products
                                {
                                    id = (int)reader["id"],
                                    title = reader["title"].ToString(),
                                    price = (decimal)reader["price"],
                                    image = reader["image"].ToString(),
                                    stock = (int)reader["stock"]
                                });
                            }
                        }
                    }

                    return Ok(products);
                }
                catch (Exception ex)
                {
                    return Ok(new List<Products>());
                }
            }
        }
    }`;

  const codeAppSettingsJson = `
  {
      "Logging": {
          "LogLevel": {
              "Default": "Information",
              "Microsoft.AspNetCore": "Warning"
          }
      },
      "AllowedHosts": "*",

      // connection string, way better in json than xml
    "ConnectionStrings": {
      "LocalDB": "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=ProductsDB;Integrated Security=True;TrustServerCertificate=True",
      "AwsDB": "Server=----instance----.aws.com,PORT;Database=ProductsDB;User Id=ApiReader;Password=---PASSWORD---;TrustServerCertificate=True",
      "AzureDB": "Server=tcp:----.database.windows.net,1433;Initial Catalog=ProductsDB;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;Authentication=Active Directory Default;" //Microsoft entra passwordless
      //or SQL connection :
      //"AzureDB": "Server=tcp:----.database.windows.net,1433;Initial Catalog=ProductsDB;Persist Security Info=False;User ID=----;Password=----;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
    }
  }
  `;

  const constValuesController = `
    using Microsoft.AspNetCore.Mvc;

    namespace BackendAngular2.Controllers
    {
        [ApiController]
        [Route("api/[controller]")]
        public class ValuesController : ControllerBase
        {
            // GET api/values
            [HttpGet]
            public IActionResult Get()
            {
                var retVal = new { key1 = "value1", key2 = "value2" };
                return Ok(retVal);
            }

            // GET api/values/5
            [HttpGet("{id}")]
            public string Get(int id)
            {
                return "value";
            }

            [HttpPost]
            public void Post([FromBody] string value)
            {
            }

            [HttpPut("{id}")]
            public void Put(int id, [FromBody] string value)
            {
            }

            [HttpDelete("{id}")]
            public void Delete(int id)
            {
            }
        }
    }
  `;

  const Program = `
    using Microsoft.Data.SqlClient;
    using BackendAngular2.Models;

    var builder = WebApplication.CreateBuilder(args);

    //adding multi-connection-string Failover with for the moment AWS, the idea is simple : we put 2 connection string, and we test each of them and we put the one active in the variable

    string[] connectionNames = { "AwsDB", "LocalDB", "AzureDB" };
    string activeConnectionString = "";


    foreach (var name in connectionNames)
    {
        string connecStr = builder.Configuration.GetConnectionString(name) ?? "";
        if (string.IsNullOrEmpty(connecStr)) continue;

        try
        {
            using (var connection = new SqlConnection(connecStr))
            {
                connection.Open();
            }
            activeConnectionString = connecStr;
            break;
        }
        catch
        {

        }
    }

    // I said that the idea was simple, but it took some time to make this 2 lines down here
    var dbConfig = new DatabaseConfig { ConnectionString = activeConnectionString };
    builder.Services.AddSingleton(dbConfig);
    
    ...`;

  return (
    <div className="Backend">
        <div className="title">
          <h1>Backend de ma WebApp Angular en ASP .NET core</h1>
        </div>
        
        <p>J'ai utilisé le build de Visual Studio 2026, en v9.0 (qui ne sera probablement plus maintenu d'ici 3 ans mais bon, ce n'est pas difficile de migrer de version avec le peu de code que j'ai). <br />

          Comment il marche ? J'ai suivi un tuto YouTube qui était très vieux et qui utilisait le XML pour faire les strings de connexion...  <br /> Quand je me suis rendu compte que c'était trop vieux, j'ai migré vers le JSON qui est bien plus agréable que le XML même si, pour le peu que j'avais, c'était quasiment la même chose.<br />

          On utilise un contrôleur MVC qui récupère la data de la base de données, et qui l'envoie en JSON vers le front en HTTPS. <br />

          C'est super facile et rapide à faire, j'ai utilisé Postman pour intercepter et vérifier que c'était bien envoyé correctement avant d'utiliser le truc du navigateur. En plus, le C# est bien plus agréable que le JS.
          <br />
          Connecter la DB à SQL SERVER MANAGEMENT STUDIO était facile, ajouter la connection à AWS en suivant un tuto était aussi facile, mais créer un moyen de tester plusieurs DB pour savoir laquelle était dispo m'a demmandé de fouiller un peu la doc.<br />
          <br /><br />
          Voici a quoi ressemble le controller MVC en C#: <br />
        </p>


        <div className="code">
          <SyntaxHighlighter 
            language="csharp" 
            style={vscDarkPlus}
          >
            {codeProductsController}
          </SyntaxHighlighter>
        </div>

        <p>
          Le controller MVC values :
        </p>  

        <div className="code">
          <SyntaxHighlighter 
            language="csharp" 
            style={vscDarkPlus}
          >
            {constValuesController}
          </SyntaxHighlighter>
        </div>

        <p>
          Le fichier json de connection :
        </p>  

        <div className="code">
          <SyntaxHighlighter 
            language="json" 
            style={vscDarkPlus}
          >
            {codeAppSettingsJson}
          </SyntaxHighlighter>
        </div>

        <p>
          Le nouveau connection string failover dans Program.cs :
        </p>  

        <div className="code">
          <SyntaxHighlighter 
            language="csharp" 
            style={vscDarkPlus}
          >
            {Program}
          </SyntaxHighlighter>
        </div>

        <p>
          <br />
          <br />
          <br />
          À la base, je voulais faire un style de page similaire aux journaux/news en ligne vu que je n'ai pas vraiment d'images à mettre du backend, ce n'est pas très visuel, c'est que du code... mais en regardant les sites, je me suis rendu compte que c'était juste moche, du coup j'ai fait plus ou moins un truc similaire mais un peu plus joli suivant le thème du portfolio. Et je ferai un joli carrousel pour le jeu Java.
          </p>
        
    </div>
  );
}

export default Backend;