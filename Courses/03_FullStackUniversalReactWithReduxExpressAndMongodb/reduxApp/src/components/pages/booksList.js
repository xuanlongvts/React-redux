'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../../actions/booksActions';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import BookItem from './bookItem';
import BooksForm from './booksForm';

class BooksList extends Component{

    componentDidMount() {
        const { getBooks } = this.props;
        getBooks();
    }

    render() {
        const { books } = this.props;
        const booksList = books.map((item, key) => (
            <Col xs={12} sm={6} md={4} key={key}>
                <BookItem item={item} />
            </Col>
        ))
        return (
            <Grid>
                <Row>
                    <Col xs={12} sm={6}>
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
        getBooks: getBooks
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);