import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/styles/index.scss'
import App from './app/App';
import "./shared/config/i18n";
import { Provider } from "react-redux";
import { store } from './app/providers/store/store';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store = {store}>
        <App />
    </Provider>
  </StrictMode>,
)
