'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import { getBooks } from '../../actions/booksActions';
import BookItem from './bookItem';
import BooksForm from './booksForm';
import Cart from './cart';

class BooksList extends Component{

    constructor(props) {
        super(props);

        this.props.getBooks();
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
                <Row>
                    <Cart />
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <BooksForm />    
                    </Col>
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
        getBooks
    }, dispatch)
)

export default connect(
    mapStateToProps, mapDispatchToProps
)(BooksList);