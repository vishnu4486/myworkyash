import React ,{Component} from 'react';
import Two from './Two'

export default class One extends Component{

    render(){
        return(
            <div><h1> {this.props.data} Welcome </h1>
            <Two data ={this.props.data} />
            </div>
        );
    }
}