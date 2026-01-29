import "../css/Kiduland.css";
import Video from "../icons/Kiduland/short.mp4";
import Image from "../icons/Kiduland/Overall.png";
import Image2 from "../icons/Kiduland/gameplay.png";

function Kiduland() {
  return (
    <div className="Kiduland">
        <h1>Kiduland</h1>

        <div className="separator">
          <p className="p-purple"> Qu'est-ce que c'est ? </p>
          <p>Ce jeu a été développé sur Unity 2D 2021.3.45f1 lors de mon année de terminale au lycée 2022-2023 puis 1-2 fois par an durant <br />
            ma première et 2ème année, les études m'empêchant de réellement plonger dans le développement. C’est un jeu qui est basé sur le <br /> 
            modèle de Kirby’s return to dream land et Mario. Il est donc de type platformer 2D où le joueur peut affronter des ennemis sur différents niveaux. <br /> 
            Le Github du projet est disponible ici : <a href="https://github.com/DaemoniaX/KIDULAND-unity-project" target="_blank" rel="noopener noreferrer">GITHUB KIDULAND</a>. <br /> 
            J'aime laisser le README de mes repos GitHub pour montrer mon idéologie et ma façon de penser de l'époque de la création du projet, <br /> 
            plutôt que de faire de beaux readmes partout qui auraient été refaits 3 ans après.
          </p>
        </div>
        
        <div className="Image-container">
          <img src={Image2} alt="gameplay" />
        </div>

        <div className="separator">
          <p className="p-purple"> Quel est l'environnement ? </p>
          <p>J'ai utilisé Unity 2D 2021.3.45f1, il utilise le principe de tiles, et a été <br /> 
            build pour Windows et Android. Malheureusement, j'avais utilisé une passerelle <br />
             de mises à jour, qui n'est aujourd'hui plus maintenue, empêchant l'installation sur Windows. <br />
            Le jeu est donc uniquement disponible sur Android pour le moment. <br />
            Il avait été fait en suivant le modèle de TutoUnityFR. 
          </p>
        </div>

        <div className="Image-container">
          <img src={Image} alt="unity" />
        </div>

        <div className="separator">
          <p className="p-purple"> Le gameplay </p>
          <p>5 niveaux, des checkpoints, des vies, des pièces à collecter, du heal. <br />
            Plusieurs mécaniques comme des portes, des boutons, un trampoline, l'aspiration de "cubes pour recharger le mana", de quoi tirer sur les <br />
            ennemis en consommant du mana.
            Plusieurs types d'ennemis, certains linéaires, d'autres avec des styles d'attaques où seule la hache inflige des dégâts et non pas une <br />
            collision avec l'ennemi, qui réagissent lorsqu'ils aperçoivent le joueur et le suivent, ou encore un ennemi flottant doté de l'algorithme <br />
            pathfinder A* lui permettant de trouver son chemin pour attaquer le joueur. <br />
            Un menu, des options, une gestion du son et de la musique, un écran de fin de niveau et de game over.
          </p>
        </div>
        
        <div className="Video-container">
          <video controls autoPlay muted loop>
            <source src={Video} type="video/mp4" />
          </video>
        </div>

        <div className="separator">
          <p className="p-purple"> Où en est le projet ? </p>
          <p>
            Honnêtement, il est à l'arrêt et il ne reprendra probablement jamais. J'ai appris énormément de choses en le développant, <br />
            mais je me suis rendu compte que... bah c'était un boulot à plein temps, et que de vouloir sortir ce jeu avec +100 niveaux <br />
            allait prendre énormément de temps. J'ai donc préféré me concentrer sur mes études.<br />
            L'idéologie de base du jeu était : amener le personnage, Kidu, à pouvoir switcher de pouvoir, et d’implémenter le multijoueur.
          </p>
        </div>
        
    </div>
  );
}

export default Kiduland;