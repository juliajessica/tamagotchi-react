import React from 'react';
import Tamagotchi from './Tamagotchi/Tamagotchi';
import StatusBar from './StatusBar';
import Dead from './Dead';
import tam from '../assets/imgs/tam.gif';

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
        tamPlay: 0,
        tamLife: true
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
    let gameOver = null;
    if(this.state.tamLife){
      gameOver = <Dead />
    } else {
      gameOver =
      <div>
        <StatusBar
          hungerLevel={this.state.tamHunger}
          playLevel={this.state.tamPlay}
          sleepLevel={this.state.tamSleep}
        />
        <Tamagotchi
          onHunger={this.handleHunger}
          onSleep={this.handleSleep}
          onPlay={this.handlePlay} />
      </div>
    }
    return (
      <div>
        <h1 className="jello">Tamagotchi</h1>
        <img src={tam} className="tamImg" />
        {gameOver}

        <style jsx>{`
          h1 {
            display:flex;
            justify-content: center;
            color: #C1E1A9;
            font-size: 4rem;
            -webkit-animation-name: jello;
            animation-name: jello;
            -webkit-animation-duration: 3s;
            animation-duration: 3s;
          -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
          }
          .tamImg{
            display: block;
            margin:auto;

          }
          @-webkit-keyframes jello {
            from,
            11.1%,
            to {
              -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
            }

            22.2% {
              -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
              transform: skewX(-12.5deg) skewY(-12.5deg);
            }

            33.3% {
              -webkit-transform: skewX(6.25deg) skewY(6.25deg);
              transform: skewX(6.25deg) skewY(6.25deg);
            }

            44.4% {
              -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
              transform: skewX(-3.125deg) skewY(-3.125deg);
            }

            55.5% {
              -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
              transform: skewX(1.5625deg) skewY(1.5625deg);
            }

            66.6% {
              -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
              transform: skewX(-0.78125deg) skewY(-0.78125deg);
            }

            77.7% {
              -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
              transform: skewX(0.390625deg) skewY(0.390625deg);
            }

            88.8% {
              -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
              transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
            }
            }

            @keyframes jello {
            from,
            11.1%,
            to {
              -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
            }

            22.2% {
              -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
              transform: skewX(-12.5deg) skewY(-12.5deg);
            }

            33.3% {
              -webkit-transform: skewX(6.25deg) skewY(6.25deg);
              transform: skewX(6.25deg) skewY(6.25deg);
            }

            44.4% {
              -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
              transform: skewX(-3.125deg) skewY(-3.125deg);
            }

            55.5% {
              -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
              transform: skewX(1.5625deg) skewY(1.5625deg);
            }

            66.6% {
              -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
              transform: skewX(-0.78125deg) skewY(-0.78125deg);
            }

            77.7% {
              -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
              transform: skewX(0.390625deg) skewY(0.390625deg);
            }

            88.8% {
              -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
              transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
            }
          }
        `}</style>
      </div>
    );
  }
}

export default App;
