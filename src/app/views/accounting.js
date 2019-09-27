import React from 'react';
import Layout from '../components/Layout';
import "./styles/accounting.css"

class Accounting extends React.Component {
    render() {
        return (
            <Layout>
                <div className="accounting-container">
                    <div className="income">
                        <h3>Ingresos</h3>
                    </div>
                    <div className="outlay">
                        <h3>Gastos</h3>
                    </div>
                    <div className="grossProfit">
                        <h3>Utilidad</h3>
                    </div>
            </div>
            </Layout>
        );
    }
}

export default Accounting;