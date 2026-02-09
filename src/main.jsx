import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/styles/index.scss'
import App from './app/App';
import "./shared/config/i18n";
import { Provider } from "react-redux";
import { store } from './app/providers/store/store';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './features/AdminAuth/hooks/useAuth';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider> 
          <App />
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
