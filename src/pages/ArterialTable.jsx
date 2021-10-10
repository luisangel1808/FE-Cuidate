import React from 'react';

const ArterialTable = () => {
    return (
        <table>
            <thead> 
                <tr>
                    <th>Fecha/Hora</th>
                    <th>Diastólica</th>
                    <th>Sistólica</th>
                    <th>Valoración</th>
                    <th>Observaciones</th>
                </tr>                
            </thead>
            <tbody>
                <tr>
                    <td>05/05/21</td>
                    <td>120</td>
                    <td>80</td>
                    <td>Normal</td>
                    <td></td>
                </tr>
                <tr>
                    <td>05/05/21</td>
                    <td>120</td>
                    <td>80</td>
                    <td>Normal</td>
                    <td></td>
                </tr>
                <tr>
                    <td>05/05/21</td>
                    <td>120</td>
                    <td>80</td>
                    <td>Normal</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default ArterialTable
