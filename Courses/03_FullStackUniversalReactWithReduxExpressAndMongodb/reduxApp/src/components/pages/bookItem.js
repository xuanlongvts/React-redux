import React, { Component } from 'react';
import { Row, Col, Well, Button } from 'react-bootstrap';

const BookItem = ({ item }) => (
    <Well className="each-item">
        <Col xs={12}>
            <h6>{item.title}</h6>
            <p>{item.description}</p>
            <h6>$. {item.price}</h6>
            <Button bsStyle="primary">Buy now</Button>
        </Col>    
    </Well>
);

export default BookItem;