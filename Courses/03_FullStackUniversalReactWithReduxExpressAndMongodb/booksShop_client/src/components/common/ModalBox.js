import React, { Component } from 'react';
import { Modal, Button, Col } from 'react-bootstrap';

class ModalBox extends Component{

    render() {
        if (!this.props.onShow) {
            return null;
        }

        return (
            <Modal show={this.props.onShow} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thank you</Modal.Title>
                </Modal.Header>
                    
                <Modal.Body>
                    <h6>Your order has been saved</h6>
                    <p>You will recieve an email confirm</p>
                </Modal.Body>
                    
                <Modal.Footer>
                    <Col xs={6}><strong>Total:</strong> $</Col>
                    <Button onClick={this.props.onClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
};

export default ModalBox;
