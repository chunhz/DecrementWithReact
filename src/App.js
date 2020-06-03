import React, {Component} from 'react';

import './App.css';


class Decrement extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentNum : props.start
    }
  }
  decreNum = ()=>{
    if (this.state.currentNum <= 0)
    alert('Cannot be less than zero');
    else
    this.setState({currentNum: this.state.currentNum-1});
  }
  render(){
    return <div>
    <h1>Decrement: </h1>
    <p id ="currentNum">Current Number is:   {this.state.currentNum}</p>
    <button onClick={this.decreNum}>Decrement</button>
    </div>
  }
}

class App extends Component{
  render(){
    return <div>
      <Decrement start={5} />
    </div>
  }
}

export default App;
