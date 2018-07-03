import React from 'react';
import PropTypes from 'prop-types';

function StatusBar(props){

  return(
    <div>
      <p>Hunger Level: {props.hungerLevel}</p>
      <p>Sleep Level: {props.sleepLevel}</p>
      <p>Play Level: {props.playLevel}</p>



      <style jsx>{`
           {
          }
        `}</style>
    </div>
  );
}

StatusBar.propTypes = {
  hungerLevel: PropTypes.number,
  sleepLevel: PropTypes.number,
  playLevel: PropTypes.number
};


export default StatusBar;
