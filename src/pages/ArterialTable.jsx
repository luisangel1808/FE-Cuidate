import axios from "axios";
import React, { useEffect, useState } from "react";

const ArterialTable = () => {
  const [measures, setMeasures] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      "http://localhost:8080/api/pressure-measurements/"

    );
    setMeasures(res.data);
    console.log(measures);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
      <>
      <h1>Mis registros de presión</h1>
    <table>
      <thead>
        <tr>
          <th>Fecha/Hora</th>
          <th>Diastólica</th>
          <th>Sistólica</th>
          <th>Pulso</th>
          <th>Valoración</th>
          <th>Observaciones</th>
        </tr>
      </thead>
      <tbody>
        {measures.map((row) => {
          return (
            <tr>
              <td>{row.date}</td>
              <td>{row.diastolic}</td>
              <td>{row.systolic}</td>
              <td>{row.pulse}</td>
              <td>{row.state}</td>
              <td>{row.observations}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
};

export default ArterialTable;