import React from 'react';
import style from './Tamagotchi.css';

import PropTypes from 'prop-types';

function Tamagotchi(props){
  return(
    <div className='buttons'>
        <button onClick={props.onHunger}>Feed</button>
        <button onClick={props.onPlay}>Play</button>
        <button onClick={props.onSleep}>Sleep</button>
        <style jsx>{`
            .buttons{
              display: flex;
              justify-content: space-around;
            }
            button{
              width: 105px;
              height: 45px;
              border-radius: 8px;
              cursor: pointer;
              border: 3px solid #E9BCEB;
              font-size: 1.2rem;
              color: #E9BCEB;
            }
            button:hover{
              border: 3px solid #C1E1A9;
              color: #C1E1A9;
              box-shadow: 2px 2px 4px #7D92B2;
            }
              `}
        </style>
    </div>

  );
}

Tamagotchi.propTypes ={
  onHunger: PropTypes.func,
  onPlay: PropTypes.func,
  onSleep: PropTypes.func
};

export default Tamagotchi;
