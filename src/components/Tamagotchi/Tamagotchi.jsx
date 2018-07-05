import React from 'react';
import style from './Tamagotchi.css';
import tam from './../../assets/imgs/tam.gif';
import PropTypes from 'prop-types';

function Tamagotchi(props){
  return(
    <div className={style.greenText}>
      <img src={tam} className="tamImg" />
        <button onClick={props.onHunger}>Feed</button>
        <button onClick={props.onPlay}>Play</button>
        <button onClick={props.onSleep}>Sleep</button>

        <style jsx>{`
          h1 {
            display:flex;
            justify-content: center;
          }
          .tamImg{
            display: block;
            margin:auto;

          }
        `}</style>
    </div>

  );
}

Tamagotchi.propTypes ={
  onHunger: PropTypes.func,
  onPlay: PropTypes.func,
  onSleep: PropTypes.func
};

export default Tamagotchi;
