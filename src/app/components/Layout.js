import React from "react";
import Header from "./header";

const Layout = (props) => {
    return(
        <React.Fragment>
            <Header />
            {props.children}
        </React.Fragment>
    )
}

export default Layout;