import React from 'react';
import PropTypes from 'prop-types';

function Dead (){
  return(
    <div>
      <h1>That boy dead!</h1>


      <style jsx>{`
        h1 {
          display:flex;
          justify-content: center;
          color: rgb(233, 188, 235);
          font-size: 4rem;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}

export default Dead;
