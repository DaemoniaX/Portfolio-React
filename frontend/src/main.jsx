import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';/*on passe de browserrouter a hashrouter a cause de githubpages pour les tests selenium*/
import { FavoritesProvider } from './contexts/FavoritesContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </HashRouter>
  </StrictMode>
);


/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>
);*/
