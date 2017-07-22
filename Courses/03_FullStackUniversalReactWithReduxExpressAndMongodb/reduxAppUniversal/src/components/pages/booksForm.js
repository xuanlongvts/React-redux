'use strict';

import React, { Component } from 'react';
import {
    Well, Panel, FormControl, FormGroup, ControlLabel, Button
} from 'react-bootstrap';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { postBooks, deleteBooks } from '../../actions/booksActions';

class BooksForm extends Component{

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDeleteBook = this.onDeleteBook.bind(this);
    }

    handleSubmit() {
        const book = [{
            title: findDOMNode(this.refs.title).value,
            description: findDOMNode(this.refs.description).value,
            price: findDOMNode(this.refs.price).value
        }];

        this.props.postBooks(book);
    }

    onDeleteBook() {
        let bookId = findDOMNode(this.refs.delete).value;
        this.props.deleteBooks(bookId);
    }

    render() {
        const { books } = this.props;
        const booksList = books.map((item, key) => (
            <option key={key}>
                {item._id}
            </option>
        ));
        return (
            <Well>
                <Panel>
                    <FormGroup controlId="title">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter title"
                            ref="title"
                        >
                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Description"
                            ref="description"
                        >
                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId="price">
                        <ControlLabel>Price</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Price"
                            ref="price"
                        >
                        </FormControl>
                    </FormGroup>
                    <Button onClick={this.handleSubmit} bsStyle="primary">
                        Save book
                    </Button>
                </Panel>
                <Panel style={{marginTop: '20px'}}>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select a book</ControlLabel>
                        <FormControl ref="delete" componentClass="select" placeholder="select">
                            <option value="select">select</option>
                            {booksList}
                        </FormControl>
                    </FormGroup>
                    <Button onClick={this.onDeleteBook} bsStyle="danger">
                        Delete book
                    </Button>
                </Panel>
            </Well>
        )
    }
}

const mapStateToProps = state => ({
    books: state.books.books
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        postBooks,
        deleteBooks
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);