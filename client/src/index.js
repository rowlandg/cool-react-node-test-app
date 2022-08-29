import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import Main from './Main';
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <Auth0Provider
    // domain={process.env.REACT_APP_AUTH0_DOMAIN}
    domain="test-pisys.eu.auth0.com"
    clientId="H7CJZjfszFDaQfTObOaF1G7MEDmlFxNS"
    // redirectUri={window.location.origin}
    redirectUri="http://localhost:3000/"
  >
    <Main />
  </Auth0Provider>
);