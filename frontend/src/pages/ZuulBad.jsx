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

        {/*blabla du dessus*/}
        <h1>Projet Zuul Bad</h1>
        <p>Voici quelques captures d'écran du jeu.</p>

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
    </div>
  );
}

export default ZuulBad;