import React ,{Component} from 'react';
import {connect} from 'react-redux';

class Displaycounter extends Component{

    render(){
        return(<div>
            <h1>Displaycounter  {this.props.age}</h1>

            <button onClick={this.props.onReset}> DosplaReset</button>
        </div>)
    }
}
const mapDispachToProps=(dispach)=>{
    return{
        onReset:()=>dispach({type:'AGE_RESET'})
    }
};

const mapStateToProps=(state)=>{
    return {
        age:state.age
    }
};


export default connect(mapStateToProps,mapDispachToProps)(Displaycounter);