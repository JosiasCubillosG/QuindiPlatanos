import React from 'react';
import Layout from '../components/Layout';
import "./styles/income.css"

class Outlay extends React.Component {
    render() {
        return (
            <Layout>
                <div className="income-container">
                    <div className="incomeBtn">
                        <button>Agregar</button>
                    </div>
                    <div className="incomeTable-container">
                        <table className="incomeTable">
                            <tr>
                                <th className="th-name">Nombre</th>
                                <th className="th-valor">Valor</th>
                            </tr>
                            <tr>
                                <td className="th-name">Abono</td>
                                <td className="th-valor">50000</td>
                            </tr>
                            <tr>
                                <td className="th-name">Abono por concepto de dos bultos de platano</td>
                                <td className="th-valor">50000</td>
                            </tr>
                            <tr>
                                <td className="th-name">Abono</td>
                                <td className="th-valor">50000</td>
                            </tr>
                            <tr>
                                <td className="th-name">Abono</td>
                                <td className="th-valor">50000</td>
                            </tr>
                        </table>
                    </div>
                    <div className="incomeTotal">
                        <h4>Total gastos: $520.000</h4>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Outlay;