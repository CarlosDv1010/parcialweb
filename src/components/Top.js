import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Top() {

    return (
    <div className="align-items-center col-xs-1 text-center">
        <h4 className='align-items-center'>Adopta un Robot con Robot Lovers!</h4>
        <div className="align-items-center col-xs-1 text-center justify-content-center bg-light">
          <img
            src="https://github.com/CarlosDv1010/parcialweb/blob/main/homeImage.png"
            alt="Imagen de inicio"
          />
        </div>
    </div>)
}

export default Top;