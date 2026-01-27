import "../css/CV.css";
import PicIcon from "../icons/photo_id.png";

function CV() {
  return (
    <div className="CV">

      <div className="CV-top">
        <div className="CV-top-left"></div>
        <div className="CV-top-right">
          <p>Ce CV a été entièrement construit avec React.</p>
        </div>
      </div>

      <div className="CV-header">
        <div className="CV-photo-container">
          <img
            src={PicIcon}
            alt="Photo de profil"
          />
        </div>
        <div className="CV-name">
          <h2>Ingénieur ESIEE Paris <br /> Filière Informatique (FI) et applications</h2>
          <p>Je recherche un contrat d'apprentissage en développement <br /> informatique dès le 1er septembre 2026 pour 24/36 mois.</p>
        </div>
      </div>


      <div className="CV-split">
        <div className="CV-column">
  
          <div className="section">
            <h2>Antonin MAROLLEAU</h2>
            <a href="https://github.com/DaemoniaX" target="_blank" rel="noreferrer">Github</a>
            <br />
            <a href="https://www.linkedin.com/in/antonin-marolleau-7b5497339" target="_blank" rel="noreferrer">Linkedin</a>
          </div>

          <div className="section">
            <h2>CONTACT</h2>
            <a href="tel:+33782126491">07 82 12 64 91</a>
            <br />
            <a href="mailto:antonin.marolleau@edu.esiee.fr">antonin.marolleau@edu.esiee.fr</a>
            <p>77400 Lagny-sur-Marne</p>
          </div>

          <div className="section">
            <h2>PROGRAMMATION</h2>
            <ul className="skills-list">
              <li>Java, C#, Python, C, SQL</li>
              <li>VHDL 2008, JavaScript</li>
              <li>Angular (Framework)</li>
              <li>React (JSX Vite)</li>
            </ul>
          </div>

          <div className="section">
            <h2>OUTILS</h2>
            <ul className="skills-list">
              <li>Git, Docker, Linux, UNIX</li>
              <li>Unity, Blender, Matlab</li>
              <li>VS, CLion, MySQL</li>
            </ul>
          </div>

          <div className="section">
            <h2>SOFT SKILLS</h2>
            <ul className="skills-list">
              <li>Adaptable, sociable</li>
              <li>Curieux, créatif</li>
              <li>Autonome, rigoureux</li>
            </ul>
          </div>

        </div>

        <div className="CV-right">
          <h1 className="titre-formation">FORMATION</h1>
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            fontWeight: "bold", 
            marginTop: "0.5rem" 
          }}>
            <span>Cycle ingénieur FI - ESIEE PARIS</span>
            <span>2026/2029</span>
          </div>

          <p>Langages : C, C++, C#, Java, Python, SQL, JEE, JS <br /> 
              Matières : sécurité, Intelligence Artificielle, algorithmique, réalité virtuelle, traitement d’images <br />
              Editeur de code : VS, eclipse, android studio
          </p>


          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            fontWeight: "bold", 
            marginTop: "1rem" 
          }}>
            <span>Cycle préparatoire - ESIEE PARIS</span>
            <span>2023/2026</span>
          </div>

          <p>Matières : mathématiques, physique, électronique, informatique <br />
              Languages : C, Java, Assembleur, Python, VHDL <br />
              Logiciels : Matlab, Simulink, Quartus, Questasim <br />
          </p>
          <p style={{ fontWeight: "bold", marginTop: "1rem" }}>Secourisme: PSC1, RIFA</p>

          <h1 className="titre-formation">CENTRES D'INTERET/PROJETS</h1>

          <p style={{ textDecoration: "underline", marginTop: "0.5rem" }}>Développement d’un jeu sur le moteur <strong>UNITY</strong> :</p>
          <p>-Fonctions, prefab, platformer 2D, UI, orienté objet</p>

          <p style={{ textDecoration: "underline", marginTop: "0.5rem" }}>Projet jeu en <strong>Java</strong> de 1ère année :</p>
          <p>-classes test, clean code, développement sous contraintes</p>

          <p style={{ textDecoration: "underline", marginTop: "0.5rem" }}>Chatbot en <strong>Python</strong> :</p>
          <p>-Ollama, VsCode, template, Instruction-based </p>

          <p style={{ textDecoration: "underline", marginTop: "0.5rem" }}>E-commerce frontend en  <strong>Angular</strong> sur <strong>Docker</strong>:</p>
          <p>-components, signals API,  tailwind css(framework), docker image & build</p>

          <p style={{ textDecoration: "underline", marginTop: "0.5rem" }}>Angular Backend <strong>.NET</strong>:</p>
          <p>-WebAPI, ASP.NET Core Project, Postman,  Microsoft SQL Server</p>
          

          <h1 className="titre-formation">EXPERIENCES</h1>

          <p style={{ fontWeight: "bold", marginTop: "0.5rem" }}>Burger King</p>
          <p>Équipier polyvalent été 2024, été 2025 <br />
           (service, ménage, préparation, accueil).
          </p>

          <p style={{ fontWeight: "bold", marginTop: "0.5rem" }}>Stage INA(Institut National de l’Audiovisuel)</p>
          <p>Découverte de l’ingénierie informatique <br />
           3ème 2019/2020
          </p>
        </div>
      </div>
    </div>
  );
}

export default CV;