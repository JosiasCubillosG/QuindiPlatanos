import React from "react";
import ReactDOM from "react-dom";
import Routes from "./src/app/components/routes";
import Context from './src/app/Context'
import Manifest from './src/public/manifest.json'
import Icon from './src/public/images/logo.ico'
import * as ServiceWorker from './src/public/serviceWorker'

const app = document.getElementById("app")

ReactDOM.render(
    <Context.Provider>
        <Routes/>   
    </Context.Provider>
    , app);
