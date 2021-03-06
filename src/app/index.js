import React from "react";
import ReactDOM from "react-dom";
import App from "./views/app";
import ChooseOption from "./views/chooseOption";
import Diseases from "./views/diseases";
import Carousel from "./components/carousel"
import DetailDisease from "./views/detailDisease";
import Accounting from "./views/accounting";
import Income from "./views/income";
import Outlay from "./views/outlay";
import Useful from "./components/useful";
import ListCrops from "./views/listCrops";
import AddCrop from "./views/addCrop";
import DetailCrop from "./views/detailCrop";
import MenuHamburguer from "./components/hamburguerMenu";
import Login from "./components/login";
import Layout from "./components/Layout";
import Menu from "./views/menu";
import Routes from "./components/routes";
const app = document.getElementById("app")

ReactDOM.render(<Routes/>, app);