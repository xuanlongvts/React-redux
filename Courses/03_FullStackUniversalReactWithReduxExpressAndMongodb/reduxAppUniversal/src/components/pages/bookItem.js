'use strict';

import React, { Component } from 'react';
import { Row, Well, Col, Button, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, updateCartItem } from '../../actions/cartActions';

class BookItem extends Component{

    constructor(props) {
        super(props);

        this.state = {
            readMore: false
        }

        this.handleCart = this.handleCart.bind(this);
    }

    onReadMore() {
        this.setState({
            readMore: true
        })
    }

    handleCart(_idProduct) {
        const {
            item: { _id, title, description, price, images },
            cart
        } = this.props;

        const book = [
            {
                _id,
                title,
                description,
                images,
                price,
                quantity: 1,
                maxBuy: 10
            },
            ...cart
        ];

        if (cart.length < 1) {
            this.props.addToCart(book);
        }
        else {
            let quantity = 0;
            let maxBuy = 0;
            let cartIndex = cart.findIndex(
                eactItem => {
                    if (eactItem._id === _idProduct) {
                        quantity = parseInt(eactItem.quantity);
                        maxBuy = parseInt(eactItem.maxBuy);
                        return true;
                    }
                }
            );

            if (cartIndex === -1) {
                this.props.addToCart(book);
            }
            else {
                quantity >= maxBuy ? false : this.props.updateCartItem(_id, 1, cart);
            }
        }
    }

    render() {
        const { item } = this.props;
        const { readMore } = this.state;
        return (
            <Well className="each-item">
                <Row>
                    <Col xs={12} sm={4}>
                        <Image src={item.images} responsive />    
                    </Col>
                    <Col xs={12} sm={8}>
                        <h6 style={{marginTop: 0}}>{item.title}</h6>
                        <p>
                            {(item.description.length > 50 && !readMore) ? (item.description.substring(0, 50)) : (item.description)}
                            {
                                item.description !== null && item.description.length > 50 && !readMore && (
                                    <Button onClick={this.onReadMore.bind(this)} className="read-more">
                                        ...Read More
                                    </Button>
                                )
                            }
                            
                        </p>
                        <h6>$. {item.price}</h6>
                        <Button bsStyle="primary"
                            onClick={this.handleCart.bind(this, item._id)}
                        >Buy now
                        </Button>
                    </Col>
                </Row>    
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