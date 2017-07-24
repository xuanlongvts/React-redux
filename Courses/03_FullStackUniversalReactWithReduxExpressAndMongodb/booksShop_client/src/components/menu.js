'use strict';

import React, { Component } from 'react';
import { Nav, NavItem, Navbar, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';

class Menu extends Component{
    
    render() {
        const { totalQuantity } = this.props;
        return (
            <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/about">About</NavItem>
                        <NavItem eventKey={2} href="/contacts">Contact Us</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/admin">Admin</NavItem>
                        <NavItem eventKey={2} href="/yourcart">
                            Your cart {totalQuantity && (<Badge className="badge">{totalQuantity}</Badge>)}
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>    
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    totalQuantity: state.carts.totalQuantity
})

export default connect(mapStateToProps)(Menu);