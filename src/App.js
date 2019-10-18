
import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import Controls from './components/CounterControls/controls';
import Display from './components/CounterDisplay/display';
import Footer from './components/CounterFooter/footer';

export default class App extends Component {
    state = {
      count: 0
    };



  handleIncrement = () => {
    let count = this.state.count;
    count = count +1;
    //console.log(count);
    this.setState({ count });
  };


  handleDecrement = () =>{
    let count = this.state.count;
    count = count - 1;
    this.setState({ count });

  }


  render() {
  return (
    <div className="App">
        <Display count={this.state.count}
       />
        <Controls  
        count={this.state.count}
        handleIncrement={this.handleIncrement}
        handleDecrement = {this.handleDecrement}
        />
        <Footer data="Developed with love by Maharoz using ReactJS"/>
    </div>
  );
}
}
