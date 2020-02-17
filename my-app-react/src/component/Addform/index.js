import React, {Component} from 'react';

import './index.css';

export default class Addform extends Component{

    render(){
        return(
            <div className="addForm">
                <div className="form-group">        
                    <label for="name">Name </label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name"/>
                </div>

                <div className="form-group">        
                    <label for="phone">Phone No </label>
                    <input type="text" className="form-control" id="phone" placeholder="Enter Name" name="phone"/>
                </div>
                <div className="form-group">        
                    <label for="email">Email ID</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter Email" name="email"/>
                </div>

                <div className="form-group">        
                    <label for="address">Address </label>
                    <input type="text" className="form-control" id="address" placeholder="Enter Address" name="address"/>
                </div>

                <button type="submit" className="btn btn-info">Submit</button>                                                                         
            </div>
        );
    }

}