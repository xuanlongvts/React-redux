'use strict';

import React, { Component } from 'react';
import {
    Well, Panel, FormControl, FormGroup, ControlLabel, Button
} from 'react-bootstrap';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { postBooks } from '../../actions/booksActions';

class BooksForm extends Component{

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const book = [{
            title: findDOMNode(this.refs.title).value,
            description: findDOMNode(this.refs.description).value,
            price: findDOMNode(this.refs.price).value
        }];

        this.props.postBooks(book);
    }

    render() {
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
            </Well>
        )
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        postBooks
    }, dispatch)
)

export default connect(null, mapDispatchToProps)(BooksForm);