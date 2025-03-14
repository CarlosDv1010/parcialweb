import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Bottom() {

    return (
      //Fijar al final de la pagina
    <div className="align-items-center col-xs-1 text-center justify-content-center bg-light fixed-bottom">
        <p className='align-items-center'>Contact Us: +57123812836 - info@robotlovers.com - @robotlovers.</p>
    </div>)
}

export default Bottom;