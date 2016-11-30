import React, {Component} from 'react';

export default class Describe extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log('Examples.render()');
        return (
            <div style={{color: 'red'}}>
                Describe: {this.props.desc}
            </div>
        )
    }
}