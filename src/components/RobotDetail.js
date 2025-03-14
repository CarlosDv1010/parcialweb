import React from 'react';

function RobotDetail({ robot }) {
  return (
    <div>
      <h4>{robot.nombre}</h4>
      <table className="table">
        <tbody>
          <tr>
            <td>{robot.imagen}</td>
          </tr>
          <tr>
            <th>Año de Fabricación</th>
            <td>{robot.añoFabricacion}</td>
          </tr>
          <tr>
            <th>Capacidad de Procesamiento: </th>
            <td>{robot.capacidadProcesamiento}</td>
          </tr>
          <tr>
            <th>Humor: </th>
            <td>{robot.humor}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RobotDetail;
