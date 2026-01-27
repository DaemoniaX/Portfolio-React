import "../css/PanelCard.css";
import { useFavorites } from "../contexts/FavoritesContext.jsx";
import { useNavigate } from "react-router-dom";

function PanelCard({ panel }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(panel.id);
  const navigate = useNavigate();

  const handleClick = () => {
    if (panel.externalUrl) {
      window.open(panel.externalUrl, "_blank", "noopener,noreferrer");
      return;
    }

    if (panel.link) {
      navigate(panel.link);
      return;
    }
    
    const slug = panel.name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    navigate(`/${slug}`);
  };

  return (
    <div className="panel-card" onClick={handleClick}>
      <div className="panel-poster">
        <img src={panel.icon} alt={`${panel.name} icon`} />
      </div>
      
      <button
        className={`favorite-btn ${isFavorite ? "active" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(panel.id);
        }}
      >
        {isFavorite ? "♥" : "♡"}
      </button>
      
      <h3>{panel.name}</h3>
    </div>
  );
}

export default PanelCard;