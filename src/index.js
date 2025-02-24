import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.css';
import EcontextProvider from './components/EContexProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EcontextProvider>
  <Auth0Provider
    domain="dev-by0dbxayrpscynon.us.auth0.com"
    clientId="7rnWuG3xkFVpjUSaTNJLDBCFARwauvSC" 
          authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <App />
  </Auth0Provider>
  </EcontextProvider>
  
  

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
