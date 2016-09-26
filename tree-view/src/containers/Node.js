import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

export class Node extends Component{
    constructor(props){
        super(props);
    }

    handleIncrementClick(){
        const {increment, id} = this.props;
        increment(id);
    }

    handleAddChildClick(e){
        e.preventDefault();

        const {addChild, createNode, id} = this.props;
        const childld = createNode().nodeld;
        addChild(id, childld);
    }

    handleRemoveClick(e){
        e.preventDefault();
        const {removeChild, deleteNode, parentld, id} = this.props;
        removeChild(parentld, id);
        deleteNode(id);
    }

    renderChild(childld){
        const {id} = this.props;
        return(
            <li key={childld}>
                <ConnectedNode id={childld} parentld={id} />
            </li>
        );
    }

    render(){
        const {counter, parentld, childlds} = this.props;
        return(
            <div className="wrapper">
                Counter: {counter} {' '}
                <button onClick={this.handleIncrementClick}>+</button>
                {' '}
                {
                    typeof parentld !== 'undefined'?
                        <a href="javascript:;"
                            onClick={this.handleRemoveClick}
                           style={{color: 'lightgray', textDecoration: 'none'}}
                        >
                            [X]
                        </a>
                        :null
                }
                <ul>
                    {childlds.map(this.renderChild)}
                    <li key="add">
                        <a href="javascript:;" onClick={this.handleAddChildClick}>
                            Add child
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return state[ownProps.id];
}

const ConnectedNode = connect(mapStateToProps, actions)(Node);
export default ConnectedNode;