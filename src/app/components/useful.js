import React from 'react';
import Layout from './Layout';
import "./styles/useful.css"

class Useful extends React.Component {
    render() {
        return (
            <Layout>
                <div className="useful-container">
                    <div className="useful_income_outlay">
                        <h3>Total ingresos: $520.000</h3>
                        <br/>
                        <h3>Total egresos: $520.000</h3>
                    </div>
                    <div className="useful">
                        <table>
                            <tr>
                                <th>
                                    Utilidad
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    $1700
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Useful;