import React from 'react';
import Feed from './Feed';
import Play from './Play';
import Sleep from './Sleep';

// import PropTypes from 'prop-types';

class Buttons extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tamHunger: 100,
      tamPlay: 100,
      tamSleep: 100
      tamLife: false;
    };
    this.handleAddingPointHunger = this.handleAddingPointHunger.bind(this);
  }

  handleAddingPointHunger(){
    console.log(this.state.tamHunger);
    let newTamHunger = this.state.tamHunger;
    newTamHunger +=2;
    this.setState(tamHunger: newTamHunger});
    console.log(this.state.tamHunger);
  }


  return(
    <div>
      <div className="flexBtns">
        <Play />
        <Feed onClick={this.handleAddingPointHunger} />
        <Sleep />
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

export default Buttons;
