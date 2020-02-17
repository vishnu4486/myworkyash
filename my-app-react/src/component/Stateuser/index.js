import React, { Component } from 'react';
import { render } from 'react-dom';
export default class Stateuser extends Component{



    change=()=>{
        this.props.change("12");
    }


    render(){
        console.log(this.props)
        let k= this.props.id;
        return(
<div>
        <h1>i am state {k}</h1>
        <h3 onClick={this.change}>change props</h3>
        </div>
        );
    }
}