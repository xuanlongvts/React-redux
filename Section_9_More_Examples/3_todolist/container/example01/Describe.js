import React, {Component} from 'react';
import {connect} from 'react-redux';
import {decrease} from '../../redux/actions/index';

class Describe extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log('Examples.render()');
        const {desc} = this.props;
        return (
            <div style={{color: 'red'}}>
                Describe: {desc}
            </div>
        )
    }
}

const DescribeContainer = connect(
    (state, ownProps) => ({
        desc: state.examples.count.decrease
    })
)(Describe);

export default DescribeContainer;