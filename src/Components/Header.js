import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends Component {

  onLogin(){
    this.props.onLogin()
  }
  onLogout(){
    this.props.onLogout()
  }





  render() {
    let logg;

    if (this.props.accessToken) {
      logg = <NavItem onClick={this.onLogout.bind(this)} href="#">Logout</NavItem>;
    } else {
      logg = <NavItem onClick={this.onLogin.bind(this)} href="#">Login</NavItem>;
    }
    return (
      <Navbar>
        <NavItem>
          <Nav>
            {logg}
          </Nav>
        </NavItem>

      </Navbar>
    );
  }

}

export default Header;
