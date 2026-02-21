import "../css/React.css";
import seleniumIcon from "../icons/react-diapo.png"


function React() {
  return (
    <div className="container">
      <div className="panel-card terminal-card">
        <div className="card-front">
          <img src={seleniumIcon} alt="Selenium" className="main-icon" />
          <h3>React & Selenium</h3>
          <p style={{ color: "blue"}}>Automatisation E2E</p>
        </div>
        <div className="card-overlay">
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="terminal-body">
            <p> pytest main.py</p>
            <p className="writing">Running tests...</p>
            <p className="passed">✔ 9 tests passed</p>
          </div>
        </div>
      </div>

      <div className="text-container">
        <h2>React & Selenium</h2>
        <p>Ce site, a été réalisé en majorité par moi. En majorité, puisque "graphs" 
          provient d'un ancien projet a moi, et j'ai dû suivre des tutos pour le swiper(la doc) et le context favoris (videos) 
          ainsi que ses hooks.
          <br/><br/>
          Le but en construisant ce site, c'était de couvrir le plus large panel de fonctionnalités qu'un portfolio puisse proposer :
          carrousel, cards, texte, etc. Le CV a été je pense le plus long, m'amuser a recopier un CV que j'avais construit avec canva...
          Suivi par l'implémentation dans github pages et tous les fix que j'ai dû apporter avec ça.
          <br/><br/>
          Le problème avec la création d'un portfolio comme ça, c'est que je vais devoir créer une nouvelle page pour chaque
          projet github.... 
          Je pense qu'il est possible de créer une pipeline assez simple pour que lorsque j'ajoute un projet sur github il 
          crée automatiquement une card sur le portfolio et affiche le readme.md mais je sens que je vais m'amuser a cause 
          de la notation des pages et l'import des images du repo.
          J'ai pas aimé passer du TypeScript au JavaScript ça m'a fait bizarre, mais en vrai on fait très peu de JS ici, bon au moins j'ai 
          dérouillé même si c'est pas vraiment du JS
          <br/><br/>
          Bref passons a Selenium. Pourquoi Selenium? il est 'active' et en python (ou Java) mais j'ai vu que python était plus
          utilisé. Je ne l'ai pas intégré dans 'npm run test', je ne le ferai probablement pas, je souhaite un jour, peut être, créer
          une pipeline de scripts qui compilent, test, et push les modifs partout. Le problème c'est que ça me fera oublier les commandes
          à taper. Je voulais aussi l'héberger sur mon raspberry pi, mais j'ai très peu de notions de cybersécurité, et c'est absolument pas
          une bonne idée de le laisser ouvert sur mon wifi comme ça. 
        </p>
      </div>
    </div>
    
  );
}

export default React;