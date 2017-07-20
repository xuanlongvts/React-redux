'use strict';

import React, { Component } from 'react';
import { Row, Well, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart } from '../../actions/cartActions';

class BookItem extends Component{
    constructor(props) {
        super(props);

        this.handleCart = this.handleCart.bind(this);
    }

    handleCart() {
        const { id, title, description, price } = this.props.item;
        const book = [
            {
                id,
                title,
                description,
                price
            }
        ];
        this.props.addToCart(book);
    }

    render() {
        const { item } = this.props;
        return (
            <Well className="each-item">
                <h6>{item.title}</h6>
                <p>{item.description}</p>
                <h6>$. {item.price}</h6>
                <Button onClick={this.handleCart} bsStyle="primary">Buy now</Button>
            </Well>
        )
    }
    
}

const mapStateToProps = state => ({
    cart: state.carts.cart
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addToCart
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);