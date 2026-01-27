import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export function useFavorites() {
  return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (panelId) => {
    setFavorites((prev) =>
      prev.includes(panelId)
        ? prev.filter((id) => id !== panelId)
        : [...prev, panelId]
    );
  };

  const value = { favorites, toggleFavorite };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
