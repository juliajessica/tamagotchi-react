import React from 'react';
import style from './Tamagotchi.css';
import tam from './../../assets/imgs/tam.gif';

function Tamagotchi(){
  return(
    <div className={style.greenText}>
      <h1>Tamagotchi</h1>
      <img src={tam} className="tamImg"/>


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

export default Tamagotchi;
