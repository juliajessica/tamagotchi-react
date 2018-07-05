import React from 'react';
import Tamagotchi from './Tamagotchi/Tamagotchi';
// import Feed from './Feed';
// import Play from './Play';
// import Sleep from './Sleep';
import StatusBar from './StatusBar';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tamHunger: 100,
      tamPlay: 100,
      tamSleep: 100,
      tamLife: false
    };
    this.handleHunger = this.handleHunger.bind(this);
    this.handleSleep = this.handleSleep.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    // this.tamLife = this.tamLife.bind(this);
  }

  componentDidMount(){
    this.lifeTimer = setInterval(() =>
      this.decrementLevels(), 1000
    );
  }

  handleHunger(){
    // console.log(this.state.tamHunger);
    if (this.state.tamHunger <=98 ){
      let newTamHunger = this.state.tamHunger;
      newTamHunger +=2;
      this.setState({tamHunger: newTamHunger});
      //console.log(this.state.tamHunger);
    }
  }

  handleSleep(){
    //console.log(this.state.tamSleep);
    if (this.state.tamSleep <= 95 ){
      let newTamSleep = this.state.tamSleep;
      newTamSleep +=5;
      //console.log(this.state.tamSleep);
      this.setState({tamSleep: newTamSleep});
    }
  }

  handlePlay(){
    //console.log(this.state.tamPlay);
    if(this.state.tamPlay <= 97){
      let newTamPlay = this.state.tamPlay;
      newTamPlay +=3;
      this.setState({tamPlay: newTamPlay});
    }
  }


  decrementLevels(){
    console.log('click');
    if (this.state.tamHunger === 70 || this.state.tamSleep === 70 || this.state.tamPlay === 70) {
      this.setState({
        tamHunger: 0,
        tamSleep: 0,
        tamPlay: 0
      });
    } else if (this.state.tamHunger !== 0 || this.state.tamSleep !== 0 || this.state.tamPlay !==0) {
      let newStateHunger = this.state.tamHunger;
      let newStateSleep = this.state.tamSleep;
      let newStatePlay = this.state.tamPlay;
      newStateHunger -=1;
      newStateSleep -=1;
      newStatePlay -=1;
      this.setState({
        tamHunger: newStateHunger,
        tamSleep: newStateSleep,
        tamPlay: newStatePlay,

      });
    }
  }




  render(){
    return (
      <div>
        <h1>Tamagotchi</h1>
        <h1></h1>
        <Tamagotchi />
        <button onClick={this.handleHunger}>Feed</button>
        <button onClick={this.handlePlay}>Play</button>
        <button onClick={this.handleSleep}>Sleep</button>
        <StatusBar
          hungerLevel={this.state.tamHunger}
          playLevel={this.state.tamPlay}
          sleepLevel={this.state.tamSleep}
          />
      </div>
    );
  }
}

export default App;

// let newTamSleepLevel = this.state.tamSleep -=3;
// let newTamPlayLevel = this.state.tamPlay -=6;


// alert when the tamagotchi dies
//
// const tamLife = (this.state.tamHunger <1 || this.state.tamPlay <1 || this.state.tamSleep <1) ? true : this.setState({tamLife: checkTamLife}));
//
//
// let checkTamLife = this.state.tamLife;
//
// if (this.state.tamHunger <1 || this.state.tamPlay <1 || this.state.tamSleep <1){
//   newCheckTamLife = 'Tamagotchi is dead';
// } else {
//   newCheckTamLife = 'Keep going';
// }
//
