'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Panel, Col, Row, Well, Button, Label, ButtonGroup
} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { deleteCartItem, updateCartItem } from '../../actions/cartActions';
import ModalBox from '../common/ModalBox';
import { addDots } from '../common/function/addDotToNumber';

class Cart extends Component{

    constructor(props) {
        super(props);

        this.state = {
            isOpenModal: false
        }

        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        });
    }
    
    handleDeleteCart(idCart) {
        this.props.deleteCartItem(idCart);
    }

    incrementQuantityCartItem(id, quantity, maxBuy) {
        quantity >= maxBuy ? false : this.props.updateCartItem(id, 1);
    }

    decrementQuantityCartItem(id, quantity) {
        quantity < 2 ? false : this.props.updateCartItem(id, -1);
    }

    render() {
        const { cart, totalAmount } = this.props;
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
                        <h6>qty. <Label bsStyle="success">{item.quantity}</Label></h6>
                    </Col>
                    <Col xs={12} sm={4}>
                        <ButtonGroup style={{ minWidth: '300px' }}>
                            <Button bsStyle="default" bsSize="small"
                                onClick={this.decrementQuantityCartItem.bind(this, item._id, item.quantity)}
                            > - </Button>
                            <Button bsStyle="default" bsSize="small"
                                onClick={this.incrementQuantityCartItem.bind(this, item._id, item.quantity, item.maxBuy)}    
                            > + </Button>
                            <span> </span>
                            <Button bsStyle="danger" bsSize="small"
                                onClick={this.handleDeleteCart.bind(this, item._id)}
                            > DELETE </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Panel>
        ));

        return (
            <Panel header="Cart" bsStyle="primary">
                {cartItemsList}
                <Row>
                    <Col xs={12}>
                        <h6 className="totalAmount"><span>Total amount:</span> $. <strong>{addDots(totalAmount)}</strong></h6>
                        <Button bsStyle="success" bsSize="small" onClick={this.openModal}>
                            PROCEED TO CHECKOUT
                        </Button>
                    </Col>
                </Row>

                <ModalBox onShow={this.state.isOpenModal} onClose={this.openModal} />
            </Panel>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.carts.cart,
    totalAmount: state.carts.totalAmount
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        deleteCartItem,
        updateCartItem
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Cart);