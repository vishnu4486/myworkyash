import React, { Component } from 'react';
import { Resister } from '../../Store/Api'

export default class Register extends Component {
    constructor(){
        super();
        this.state={
            fullName:'',
            phone:'',
            address:'',
            password:'',
            email:''

        }
    }
    handleChange = (event)=> {
        this.setState({ [event.target.name]: event.target.value })
    }
    resester =()=>{
        Resister(this.state)

    }
    render() {
        return (
            <div className="yashRegister">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-3">

                    </div>
                    <div className="col-lg-6">

                        <div className="addForm">
                            <div className="form-group">
                                <label for="name">Name </label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Name" name="fullName" value={this.state.fullName}  onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone No </label>
                                <input type="text" className="form-control" id="phone" placeholder="Enter Name" name="phone"value={this.state.phone}  onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email ID</label>
                                <input type="text" className="form-control" id="email" placeholder="Enter Email" name="email" value={this.state.email}  onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Password </label>
                                <input type="password" className="form-control" id="address" placeholder="Enter Password" name="password" value={this.state.password}  onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address </label>
                                <input type="text" className="form-control" id="address" placeholder="Enter Address" name="address" value={this.state.address}  onChange={this.handleChange}/>
                            </div>
                            <button type="submit" className="btn btn-info" onClick={this.resester}>Submit</button>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        
                    </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}