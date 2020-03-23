import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdbreact';
import './navbar.css';

class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar className='sticky-top' color='grey darken-3' dark expand='md'>
        <MDBNavbarBrand className='brand'>
          <MDBNavLink to='/'>
            <strong className='white-text'>Kevin LeRoy | Portfolio</strong>
          </MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to='/about'>About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/portfolio'>Portfolio</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/technology'>Technology</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/contact'>Contact</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;
