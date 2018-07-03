import React from 'react';
import Tamagotchi from './Tamagotchi/Tamagotchi';
import Buttons from './Buttons';

function App(){
  return (
    <div>
      <Tamagotchi />
      <div className="flexButtons"><Buttons/ ></div>

      <style>{`
          {

          }
          `}</style>
    </div>
  );
}

export default App;
