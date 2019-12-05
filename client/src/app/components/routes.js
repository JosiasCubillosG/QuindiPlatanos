import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Layout from "./Layout";
import Login from "./login";
import Recover from "./recoverPass";
import ChooseOption from "../views/chooseOption";
import Diseases from "../views/diseases";
import DetailDisease from "../views/detailDisease";
import Accounting from "../views/accounting";
import Income from "../views/income";
import Outlay from "../views/outlay";
import Useful from "./useful";
import ListCrops from "../views/listCrops";
import AddCrop from "../views/addCrop";
import DetailCrop from "../views/detailCrop";
import Menu from "../views/menu";
import App from "../views/app";

function Routes (){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/recover" component={Recover} />
                    <Route exact path="/options" component={ChooseOption} />
                    <Route exact path="/options/diseases" component={Diseases} />
                    <Route exact path="/options/diseases/detail" component={DetailDisease} />
                    <Route exact path="/options/accounting" component={Accounting} />
                    <Route exact path="/options/accounting/income" component={Income} />
                    <Route exact path="/options/accounting/outlay" component={Outlay} />
                    <Route exact path="/options/accounting/useful" component={Useful} />
                    <Route exact path="/options/crops" component={ListCrops} />
                    <Route exact path="/options/addCrop" component={AddCrop} />
                    <Route exact path="/options/detailCrop" component={DetailCrop} />
                    <Route exact path="/menu" component={Menu} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default Routes