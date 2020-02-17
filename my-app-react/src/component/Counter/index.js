import React ,{Component} from 'react';
import { connect} from 'react-redux'; 


 class Counter extends Component{
    constructor(){
        super();
         this.state={
            Age:0
         }

    }
    render(){
        return(
            <div>
                <h1>Age:- {this.props.age} </h1>
                <input type="button" value="Age Up" className="btn btn-info" onClick={this.props.onAgeUp } /> 
                <input type="button" value="Age down" className="btn btn-info" onClick={this.props.onAgeDown } />
                <input type="button" className="btn btn-info" value="Age reset " onClick={this.props.onReset } />


            </div>
        )
    }
}
const mapDispachToProps=(dispach)=>{
    return{
        onAgeUp:()=>dispach({type:'AGE_UP'}),
        onAgeDown:()=>dispach({type:'AGE_DOWN'}),
        onReset:()=>dispach({type:'AGE_RESET'})
    }
};

const mapStateToProps=(state)=>{
    return {
        age:state.age
    }
};
export default connect(mapStateToProps,mapDispachToProps)(Counter);