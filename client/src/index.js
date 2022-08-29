import React from 'react';
import * as dotenv from "dotenv";
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import Main from './Main';
import "./index.css";

dotenv.config();

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
    //redirectUri="http://localhost:3000/"
  >
    <Main />
  </Auth0Provider>
);