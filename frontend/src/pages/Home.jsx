import SearchInput from "../components/SearchInput";
import PanelGrid from "../components/PanelGrid";
import { useState } from "react";
import "../css/Home.css";
import { useFavorites } from "../contexts/FavoritesContext.jsx";

import KidulandIcon from "../icons/Kiduland-icon.png";
import graphIcon from "../icons/graph-icon.png";
import JSCalculatorIcon from "../icons/JSCalculator-icon.png";
import angularEcommerceIcon from "../icons/Angular-icon.png";
import ZuulBadIcon from "../icons/ZuulBad-icon.png";
import backendIcon from "../icons/backend-icon.png";

function Home() {
  const baseUrl = import.meta.env.BASE_URL;//pour github pages sinon ca n'ouvre pas mes pages

  const getPath = (filename) => {//pour github pages
    if (baseUrl === '/') return `/${filename}`;

    return `${baseUrl}${filename}`;
  };

  //////////////////////////////////////////////////

  /*
  * Tout ce qui traite de la search bar
  */
  const [searchQuery, setSearchQuery] = useState("");
  const { favorites } = useFavorites();

  const panels = [
    { id: 1, name: "Kiduland", icon: KidulandIcon },
    { id: 2, name: "Graphs", icon: graphIcon },
    { id: 3, name: "ZuulBad", icon: ZuulBadIcon },
    { id: 4, name: "Backend", icon: backendIcon },
    { id: 5, name: "JS Calculator", icon: JSCalculatorIcon, externalUrl: getPath("JSCalculator/index.html") },
    { id: 6, name: "Angular Ecommerce App", icon: angularEcommerceIcon, externalUrl: getPath("mon-shop/index.html") },
  ];

  const filteredPanels = panels.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const favoritePanels = filteredPanels.filter((p) =>
    favorites.includes(p.id)
  );

  const otherPanels = filteredPanels.filter(
    (p) => !favorites.includes(p.id)
  );

  return (
    <div className="home">

      {/*search bar*/}
      <SearchInput value={searchQuery} onChange={setSearchQuery} />

      {/* SECTION favorites */}
      {favoritePanels.length > 0 && (//ça ne rend pas si propre avec les composants mais bon
        <div className="favorites-section">
          <h2>♥ Favorites</h2>
          <PanelGrid panels={favoritePanels} />
        </div>
      )}

      {/* SECTION autres */}
      <div className="others-section">
        {favoritePanels.length > 0 && <h2>All Panels</h2>}
        <PanelGrid panels={otherPanels} />
      </div>
    </div>
  );
}

export default Home;
