import React from 'react';
// import PropTypes from 'prop-types';

function Buttons(){

  return(
    <div>
      <div className="flexBtns">

        <button type="button" onClick={this.handleSleep}>SLEEP</button>
        <button type="button" onClick={this.handlePlay}>PLAY</button>
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
//
// Buttons.propTypes = {
//
// };


export default Buttons;
