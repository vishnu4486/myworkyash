import React, { Component } from "react";
import { LoginDetail } from "../../Store/Api";
import { Button } from "reactstrap";
import "./index.css";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      passWord: "",
      forget: 0,
      username: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  login = () => {
    let loginobj;
    LoginDetail(this.state);
  };
  forgetPassword = () => {
    this.setState({
      forget: 1
    });
    console.log("Forget password");
  };

  sendEmailID=() =>{
    this.setState({
        forget: 0
      });
      console.log(this.state.username);
  }
  closePoup =()=>{
    this.setState({
        forget: 0
      });
  }
  render() {
    return (
      <div>
        <div className="yashRegister">
          <div className="container">
            <div className="loginForm">
              <h1>Log in </h1>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <input
                type="button"
                className="btn btn-info btnlogin"
                value="log in"
                onClick={this.login}
              />
              <p
                onClick={this.forgetPassword}
                className="float-right forgetPass"
              >
                forget Password
              </p>
            </div>
          </div>
          {this.state.forget ? (
            <div className="bodyforgetpassword">
              <div className="mainbody">
                <span className="float-right close" onClick={this.closePoup}>&#10006;</span>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="username"
                    placeholder="Enter Email ID"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </div>
                <input
                  type="button"
                  className="btn btn-info btnlogin"
                  value="Submit"
                  onClick={this.sendEmailID}
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
