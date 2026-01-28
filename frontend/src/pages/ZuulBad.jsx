import "../css/ZuulBad.css";
//Ici le but c'était de faire un carrousel d'images pour montrer des screenshots du projet Zuul Bad.
//J'ai été regarder sur reddit quel était le meilleur moyen pour le faire et ils ont conseillé ce package : Swiper.js

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//les 5 images 
import img1 from "../icons/Java/projBluej.png";
import img2 from "../icons/Java/start.png"; 
import img3 from "../icons/Java/2.png";
import img4 from "../icons/Java/3.png";
import img5 from "../icons/Java/codeOxygen.png";


function ZuulBad() {
  
  // on les mets dans un tableau pour les ranger
  const slides = [
    { id: 1, image: img1, text: "Ce projet a été réalisé en Java avec BlueJ" },
    { id: 2, image: img2, text: "On démarre ici" },
    { id: 3, image: img3, text: "Déplacements classiques" },
    { id: 4, image: img4, text: "Minimap + grid de boutons" },
    { id: 5, image: img5, text: "Clean code commentaires DOXYGEN" },
  ];

  return (
    <div className="ZuulBad">

        <h1>Projet Zuul Bad E1, Lost or LOST?</h1>

        {/* CARROUSEL */}
        <div className="carousel-container">
          <Swiper
            
            //les paramètres de la doc react, de base c'est 50,3 sauf que c'est pas adapté
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1} // 1 seule au lieu de 3
            navigation // les fleches
            pagination={{ clickable: true }} // les points en bas
            autoplay={{ delay: 3000 }} // change toute les 3 secondes
          >
            
            {slides.map((slide) => (// on utilise le tableau plutot que 5 lignes
              <SwiperSlide key={slide.id}>
                <div className="slide-content">

                  <img src={slide.image} alt={slide.text} />

                  {/* le titre */}
                  <div className="slide-text">
                    {slide.text}
                  </div>
                  
                </div>
              </SwiperSlide>
            ))}


          </Swiper>
        </div>

        <p>
          Lost or LOST? est un jeu au tour par tour textuel, mais qui possède des images.
          Il a été réalisé en Java avec l'IDE BlueJ dans le cadre du cours de Programmation Orientée Objet durant ma 1ère année.
          Réalisé tout seul, il est entièrement basé sur le guide du prof puisqu'il était interdit de s'en écarter.
          C'était d'ailleurs pour ça que j'étais si énervé dans le README GitHub, car on ne pouvait pas faire ce qu'on voulait, 
          même lorsque l'on écrivait des horreurs.
          <br /><br />
          Le but du jeu est de s'échapper d'un bâtiment en se déplaçant de pièce en pièce et en ramassant des objets.
          On dispose d'images qui changent en fonction de chaque pièce, d'une sortie textuelle et d'une entrée textuelle où l'on entre les commandes de déplacement.
          On était aussi supposé avoir accès à une minimap et à une grille de boutons évitant d'avoir à taper les commandes.
          Malheureusement, ce projet n'a jamais été fini par manque d'intérêt.
          La minimap, la grille, la fin et certaines images sont donc manquantes.
          <br /><br />
          Il est disponible sur mon GitHub ; comme d'habitude, j'ai laissé le GitHub originel pour montrer l'évolution.<br />
          Par contre, ce projet nous a permis d'apprendre le "Clean Code" ainsi que la documentation DOXYGEN, et c'est un très bon point positif.
          <br /><br />
          Je suis aussi très content de ce carrousel, je pensais que ça allait être une horreur, mais en fait cela ne m'a pris que 30 min,
          car il existe des packages. Le plus long, ça a été le tableau. En soi, vu le peu d'images et le fait qu'elles ne sont pas amenées à 
          changer, ce n'était pas nécessaire, mais dans une idéologie de code propre, c'est mieux.
        </p>
    </div>
  );
}

export default ZuulBad;