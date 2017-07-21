'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Panel, Col, Row, Well, Button, Label, ButtonGroup
} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { deleteCartItem, updateCartItem } from '../../actions/cartActions';

class Cart extends Component{

    constructor(props) {
        super(props);
    }

    handleDeleteCart(idCart) {
        this.props.deleteCartItem(idCart);
    }

    incrementQualityCartItem(id, quality, maxBuy) {
        quality >= maxBuy ? false : this.props.updateCartItem(id, 1);
    }

    decrementQualityCartItem(id, quality) {
        quality < 2 ? false : this.props.updateCartItem(id, -1);
    }

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
                        <h6>qty. <Label bsStyle="success">{item.quality}</Label></h6>
                    </Col>
                    <Col xs={12} sm={4}>
                        <ButtonGroup style={{ minWidth: '300px' }}>
                            <Button bsStyle="default" bsSize="small"
                                onClick={this.decrementQualityCartItem.bind(this, item.id, item.quality)}
                            > - </Button>
                            <Button bsStyle="default" bsSize="small"
                                onClick={this.incrementQualityCartItem.bind(this, item.id, item.quality, item.maxBuy)}    
                            > + </Button>
                            <span> </span>
                            <Button bsStyle="danger" bsSize="small"
                                onClick={this.handleDeleteCart.bind(this, item.id)}
                            > DELETE </Button>
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

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        deleteCartItem,
        updateCartItem
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Cart);