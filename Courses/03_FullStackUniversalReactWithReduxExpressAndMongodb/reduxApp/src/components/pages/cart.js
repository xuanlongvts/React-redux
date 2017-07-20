'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Panel, Col, Row, Well, Button, Label, ButtonGroup
} from 'react-bootstrap';


class Cart extends Component{


    render() {
        const { cart } = this.props;

        if (cart.length < 1) {
            return null;
        }
        
        const cartItemsList = cart.map((item, key) => (
            <Panel key={key}>
                <Row>
                    <Col xs={12} sm={4}>
                        <h6>{item.title}</h6>
                    </Col>
                    <Col xs={12} sm={2}>
                        <h6>$. {item.price}</h6>
                    </Col> 
                    <Col xs={12} sm={2}>
                        <h6>qty. <Label bsStyle="success"></Label></h6>
                    </Col>
                    <Col xs={12} sm={4}>
                        <ButtonGroup style={{ minWidth: '300px' }}>
                            <Button bsStyle="default" bsSize="small">
                                -
                            </Button>
                            <Button bsStyle="default" bsSize="small">
                                +
                            </Button>
                            <span> </span>
                            <Button bsStyle="danger" bsSize="small">DELETE</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Panel>
        ));

        return (
            <Panel header="Cart" bsStyle="primary">
                {cartItemsList}
            </Panel>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.carts.cart
});

export default connect(mapStateToProps)(Cart);