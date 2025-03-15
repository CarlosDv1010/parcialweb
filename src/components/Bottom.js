import React from 'react';

function Bottom() {
  return (
    <div
      className="container-fluid text-center py-3"
      style={{
        backgroundColor: '#fff',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <p className="mb-0" style={{ color: '#333' }}>
        Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers
      </p>
    </div>
  );
}

export default Bottom;
