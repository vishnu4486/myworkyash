import React, { Component } from 'react';
import Header from './component/Header/'
import Footer from './component/Footer/'

// import Homepage from './component/Homepage/'
import './App.css';
import Stateuser from './component/Stateuser';


class App extends Component {
constructor(){
  super();
  this.state={
    id:10
  }

}
change=(k)=>{
  alert("wel come to the ");
}

  render() {
    return (
      <div>
        <Header />
        {/* <Homepage /> */}
        <Footer />

        <Stateuser id={this.state.id} change={this.change} />
      </div>
    )
  }

}

export default App;
