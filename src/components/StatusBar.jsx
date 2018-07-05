import React from 'react';
import PropTypes from 'prop-types';
// import Moment from 'moment';

function StatusBar(props){

  // function displayGameStart(gameStart){
  //   return gameStart.from(new Moment(), true);
  // }

  return(
    <div className="flexStatusBar">
      <p><strong>Hunger Level:</strong> {props.hungerLevel}</p>
      <p><strong>Play Level:</strong> {props.playLevel}</p>
      <p><strong>Sleep Level:</strong> {props.sleepLevel}</p>



      <style jsx>{`
          .flexStatusBar{
            display:flex;
            justify-content: space-around;
            flex-direction: row;
            margin-top: 80px;
          }
          p{
            color: #7D92B2;
          }
        `}</style>
    </div>
  );
}

StatusBar.propTypes = {
  hungerLevel: PropTypes.number,
  sleepLevel: PropTypes.number,
  playLevel: PropTypes.number,
};


export default StatusBar;
