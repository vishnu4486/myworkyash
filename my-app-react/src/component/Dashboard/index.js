import React,{ Component } from 'react';
import {getPosts,getData} from '../../Store/Api';
import Navbar from '../Navbar/'
import  Tableshare from '../Table';
export default class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            header: []
        }
    }
    getUrl=async (url)=>{
        const data = await getData(url);
        if(data.length>0){
            var header= Object.keys(data[0]);
            this.setState({ data,header});
        }

    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        
                          <Navbar sendUrl={this.getUrl}/>
                    </div>
                    <div className="col-lg-9">
                       { this.state.data.length >0 ? <Tableshare header = {this.state.header} data= {this.state.data } /> : <h1>Recorde Not found</h1> }  
                    </div>

                </div>
            </div>
        )
    }

}
