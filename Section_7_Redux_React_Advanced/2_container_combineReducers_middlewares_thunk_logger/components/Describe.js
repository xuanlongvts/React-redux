import React, {Component} from 'react';

export default class Describe extends Component {

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

/*const mapStateToProps = (state, ownProps) => {
    console.log('state: ', state.count.decrease);
    return {
        desc: state.count.decrease
    }
};

const DescribeContainer = connect(
    mapStateToProps
)(Describe);*/