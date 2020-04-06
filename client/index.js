import React from "react";
import ReactDOM from "react-dom";
import Routes from "./src/app/components/routes";
import Context from './src/app/Context'

const app = document.getElementById("app")

ReactDOM.render(
    <Context.Provider>
        <Routes/>   
    </Context.Provider>
    , app);
