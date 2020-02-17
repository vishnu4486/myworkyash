import React, { Component } from 'react';
import { Nav, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Homepage from '../Homepage/';
import Contact from '../Contact/';
import Gallary from '../Gallary/';
import About from '../About/';
import Register from '../Register/';
import Login from '../Login/';
import Counter from '../Counter/';
import Dashboard from '../Dashboard'; 
import './index.css';

export default class Header extends Component {
    render() {
        return (
            <div className="yashHeader text-right">
                <Router>
                    <div className="navBar">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-4">
                            </div>
                            <div className="col-lg-8">
                                <Nav>
                                    <NavLink><Link to="/">Home</Link></NavLink>
                                    <NavLink><Link to="/contact">Contact</Link></NavLink>
                                    <NavLink><Link to="/gallary">Gallary</Link></NavLink>
                                    <NavLink><Link to="/about">About</Link></NavLink>
                                    <NavLink><Link to="/counter">Counter</Link></NavLink>
                                    <NavLink><Link to="/dashboard">Dashboard</Link></NavLink>
                                    <NavLink><Link to="/register">Register</Link></NavLink>
                                    <NavLink><Link to="/login">Login</Link></NavLink>
                                </Nav>
                            </div>
                        </div>
                    </div>
                    </div>
                    <Route exact path="/" component={ Homepage } />
                    <Route path="/about" component={ About } />
                    <Route path ="/contact" component={ Contact } />
                    <Route path ="/gallary" component={ Gallary } />
                    <Route path ="/register" component={ Register } />
                    <Route path ="/login" component={ Login } />
                    <Route path ="/counter" component={ Counter } />
                    <Route path ="/dashboard" component={ Dashboard } />
                </Router>
            </div>
        );
    }
}

