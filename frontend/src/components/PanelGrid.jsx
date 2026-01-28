import PanelCard from "./PanelCard";
import "../css/PanelGrid.css";

function PanelGrid({ panels }) {
  
  if (!panels) return null;//j'avais eu des pb sans ça

  return (
    <div className={`panels-grid ${panels.length === 1 ? "single" : ""}`}>
      {panels.map((p) => (
        <PanelCard panel={p} key={p.id} />
      ))}
    </div>
  );
}

export default PanelGrid;