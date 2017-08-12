'use strict';

import React, { Component } from 'react';
import { Nav, NavItem, Navbar, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

class Menu extends Component{
    
    render() {
        const { totalQuantity } = this.props;
        return (
            <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Long Lê</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/about">
                            <NavItem eventKey={1}>About</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/contacts">
                            <NavItem eventKey={2}>Contact Us</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                    <LinkContainer to="/admin">
                        <NavItem eventKey={3}>Admin</NavItem>
                    </LinkContainer>     
                    <LinkContainer to="/yourcart">
                        <NavItem eventKey={4}>
                            Your cart {totalQuantity && (<Badge className="badge">{totalQuantity}</Badge>)}
                        </NavItem>
                    </LinkContainer>
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