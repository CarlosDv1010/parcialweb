import React from 'react';

function Top() {
  return (
    <div className="container-fluid text-center p-4">
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>
        Adopta un Robot con Robot Lovers!
      </h1>
      <img
        src="/assets/homeImage.png"
        alt="Robots banner"
        className="img-fluid"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
}

export default Top;
