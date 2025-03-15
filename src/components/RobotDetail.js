import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

function RobotDetail({ robot, role }) {
  const [editableRobot, setEditableRobot] = useState(robot || {});

  useEffect(() => {
    if (robot) {
      setEditableRobot(robot);
    }
  }, [robot]);

  if (!robot) {
    return <p><FormattedMessage id="detail.loading" defaultMessage="Cargando..." /></p>;
  }

  const isAdmin = role?.toLowerCase() === 'administrador';
  const robotToShow = isAdmin ? editableRobot : robot;

  const fixImageUrl = (url) => {
    return url?.includes("github.com") ? url.replace("blob/main", "raw/main") : url;
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h4 style={{ textAlign: 'center', marginBottom: '1rem' }}>
        {robotToShow?.nombre || <FormattedMessage id="detail.noName" defaultMessage="Sin nombre" />}
      </h4>
      <div className="text-center mb-3">
        <img
          src={fixImageUrl(robotToShow?.imagen) || ''}
          alt="Imagen del robot"
          className="img-fluid"
          style={{ maxWidth: '200px', borderRadius: '5px' }}
        />
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.95rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <span style={{ marginRight: '0.5rem', color: '#007bff' }}>→</span>
          <strong><FormattedMessage id="detail.year" defaultMessage="Año de fabricación" />:</strong> {robotToShow?.añoFabricacion || '-'}
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <span style={{ marginRight: '0.5rem', color: '#007bff' }}>→</span>
          <strong><FormattedMessage id="detail.capacity" defaultMessage="Capacidad de procesamiento" />:</strong> {robotToShow?.capacidadProcesamiento || '-'}
        </li>
        <li>
          <span style={{ marginRight: '0.5rem', color: '#007bff' }}>→</span>
          <strong><FormattedMessage id="detail.humor" defaultMessage="Características adicionales" />:</strong> {robotToShow?.humor || '-'}
        </li>
      </ul>
    </div>
  );
}

export default RobotDetail;
