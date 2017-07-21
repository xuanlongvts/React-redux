'use strict';

import React, { Component } from 'react';
import { Row, Well, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, updateCartItem } from '../../actions/cartActions';

class BookItem extends Component{

    constructor(props) {
        super(props);

        this.handleCart = this.handleCart.bind(this);
    }

    handleCart(_id) {
        const {
            item: { id, title, description, price },
            cart
        } = this.props;

        const book = [
            {
                id,
                title,
                description,
                price,
                quality: 1,
                maxBuy: 10
            }
        ];

        if (cart.length < 1) {
            this.props.addToCart(book);
        }
        else {
            let quality = 0;
            let maxBuy = 0;
            let cartIndex = cart.findIndex(
                eactItem => {
                    if (eactItem.id === _id) {
                        quality = parseInt(eactItem.quality);
                        maxBuy = parseInt(eactItem.maxBuy);
                        return true;
                    }
                        
                }
            );

            if (cartIndex === -1) {
                this.props.addToCart(book);
            }
            else {
                quality >= maxBuy ? false : this.props.updateCartItem(id, 1);
            }
        }
    }

    render() {
        const { item } = this.props;
        return (
            <Well className="each-item">
                <h6>{item.title}</h6>
                <p>{item.description}</p>
                <h6>$. {item.price}</h6>
                <Button bsStyle="primary"
                    onClick={this.handleCart.bind(this, item.id)}
                >Buy now
                </Button>
            </Well>
        )
    }
    
}

const mapStateToProps = state => ({
    cart: state.carts.cart
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addToCart,
        updateCartItem
    }, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookItem);