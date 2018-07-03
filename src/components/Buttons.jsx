import React from 'react';
import Feed from './Feed';
import Play from './Play';
import Sleep from './Sleep';
// import PropTypes from 'prop-types';

function Buttons(){
  return(
    <div>
      <div className="flexBtns">
        <Play />
        <Feed />
        <Sleep />
      </div>


        <style jsx>{`
          .flexBtns{
            display:flex;
            justify-content: center;
          }
        `}</style>

    </div>
  );
}


export default Buttons;
