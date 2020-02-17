import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import './index.css';

export default class Navbar extends Component {
    
    render() {
        return (
          <div className="left-nav">
        <Nav vertical>
          <NavItem>
            <NavLink href="#" onClick={this.props.sendUrl.bind(this,'posts')}>posts</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={this.props.sendUrl.bind(this,'comments')}>comments</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={this.props.sendUrl.bind(this,'albums')}>albums</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={this.props.sendUrl.bind(this,'photos')}>photos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={this.props.sendUrl.bind(this,'todos')}>todos</NavLink>
          </NavItem>
        </Nav>
      </div>
               
        )
    }
}

