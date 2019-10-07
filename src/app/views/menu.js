import React from 'react';
import Layout from '../components/Layout';
import "./styles/menu.css"

class Menu extends React.Component {
    render() {
        return (
            <Layout>
                <div className="menu-container">
                    <div className="menuHome">
                        <h2>Inicio</h2>
                    </div>
                    <div className="menuDiseases">
                        <h2>Enfermedades</h2>
                    </div>
                    <div className="menuAccounting">
                        <h2>Contabilidad</h2>
                    </div>
                    <div className="menuControl">
                        <h2>Control</h2>
                    </div>
                    <div className="menuLogOut">
                        <h2>Cerrar Sesión</h2>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Menu;