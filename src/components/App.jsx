import React from 'react';
import Tamagotchi from './Tamagotchi/Tamagotchi';
import Feed from './Feed';
import Play from './Play';
import Sleep from './Sleep';
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
    setInterval(() =>
      this.changeLevels(), 1000
    );
  }

  changeLevels(){
    let newTamHungerLevel = this.state.tamHunger --;
    let newTamSleepLevel = this.state.tamSleep -=3;
    let newTamPlsyLevel = this.state.tamPlay -=6;

    this.setState(
      {newTamHungerLevel: this.state.tamHunger,
      newTamSleepLevel: this.state.tamSleep,
      newTamPlayLevel: this.state.tamPlay
      }

    );
  }


  handleSleep(){
    console.log(this.state.tamSleep);
    let newTamSleep = this.state.tamSleep;
    newTamSleep +=5;
    this.setState({tamSleep: newTamSleep});
    console.log(this.state.tamSleep);
  }
  handlePlay(){
    console.log(this.state.tamPlay);
    let newTamPlay = this.state.tamPlay;
    newTamPlay +=3;
    this.setState({tamPlay: newTamPlay});
    console.log(this.state.tamPlay);
  }
  handleHunger(){
    console.log(this.state.tamHunger);
    let newTamHunger = this.state.tamHunger;
    newTamHunger +=2;
    this.setState({tamHunger: newTamHunger});
    console.log(this.state.tamHunger);
  }

  // const tamLife = (this.state.tamHunger <1 || this.state.tamPlay <1 || this.state.tamSleep <1) ? true : this.setState({tamLife: checkTamLife}));


  // let checkTamLife = this.state.tamLife;
  //
  // if (this.state.tamHunger <1 || this.state.tamPlay <1 || this.state.tamSleep <1){
  //   newCheckTamLife = 'Tamagotchi is dead';
  // } else {
  //   newCheckTamLife = 'Keep going';
  // }
  //

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
          sleepLevel={this.state.tamSleep}
          playLevel={this.state.tamPlay}
          />
      </div>
    );
  }
}

export default App;
