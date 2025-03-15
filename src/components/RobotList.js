import React from 'react';
import { FormattedMessage } from 'react-intl';

function RobotList({ robots, onSelect }) {
  return (
    <table className="table" style={{ borderCollapse: 'collapse' }}>
      <thead style={{ backgroundColor: '#000', color: '#fff' }}>
        <tr>
          <th><FormattedMessage id="tableHeaders.id" /></th>
          <th><FormattedMessage id="tableHeaders.name" /></th>
          <th><FormattedMessage id="tableHeaders.model" /></th>
          <th><FormattedMessage id="tableHeaders.company" /></th>
        </tr>
      </thead>
      <tbody>
        {robots.map((robot) => (
          <tr key={robot.id} onClick={() => onSelect(robot)} style={{ cursor: 'pointer' }}>
            <td>{robot.id}</td>
            <td>{robot.nombre}</td>
            <td>{robot.modelo}</td>
            <td>{robot.empresaFabricante}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RobotList;
