import PanelCard from "../components/PanelCard";
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

  const [searchQuery, setSearchQuery] = useState("");
  const { favorites } = useFavorites();

  const panels = [
    { id: 1, name: "Kiduland", icon: KidulandIcon },
    { id: 2, name: "Graphs", icon: graphIcon },
    { id: 3, name: "ZuulBad", icon: ZuulBadIcon },
    { id: 4, name: "Backend", icon: backendIcon },
    { id: 5, name: "JS Calculator", icon: JSCalculatorIcon, externalUrl: "${baseUrl}/JSCalculator/index.html" },
    { id: 6, name: "Angular Ecommerce App", icon: angularEcommerceIcon, externalUrl: "${baseUrl}/mon-shop/index.html" },
    
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

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for panels..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      {/* SECTION favorite */}
      {favoritePanels.length > 0 && (
        <div className="favorites-section">
          <h2>♥ Favorites</h2>
          <div className={`panels-grid ${favoritePanels.length === 1 ? "single" : ""}`}>
            {favoritePanels.map((p) => (
              <PanelCard panel={p} key={`fav-${p.id}`} />
            ))}
          </div>
        </div>
      )}

      {/* SECTION other panels */}
      <div className="others-section">
        {favoritePanels.length > 0 && <h2>All Panels</h2>}
        <div className={`panels-grid ${otherPanels.length === 1 ? "single" : ""}`}>
          {otherPanels.map((p) => (
            <PanelCard panel={p} key={`other-${p.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
