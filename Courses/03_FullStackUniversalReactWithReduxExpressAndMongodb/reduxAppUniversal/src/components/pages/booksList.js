'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Carousel, Grid, Row, Col, Button } from 'react-bootstrap';

import { getBooks } from '../../actions/booksActions';
import BookItem from './bookItem';
import BooksForm from './booksForm';

import { getCart } from '../../actions/cartActions';

class BooksList extends Component{

    constructor(props) {
        super(props);

        this.props.getBooks();
        this.props.getCart();
    }

    render() {
        const { books } = this.props;
        const booksList = books.map((item, key) => (
            <Col xs={12} sm={6} md={4} key={key}>
                <BookItem item={item} />
            </Col>
        ));
        
        return (
            <Grid>
                <Row style={{ marginBottom: '20px' }}>
                    <Col xs={12}>
                        <Carousel>
                            <Carousel.Item>
                                <img width={900} height={300} alt="900x300" src="/images/home1.jpg"/>
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width={900} height={300} alt="900x300" src="/images/home2.jpg"/>
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>    
                </Row>
                <Row>
                    {books && booksList}
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    books: state.books.books
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getBooks,
        getCart
    }, dispatch)
)

export default connect(
    mapStateToProps, mapDispatchToProps
)(BooksList);