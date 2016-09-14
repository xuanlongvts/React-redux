import React, {Component, PropTypes} from 'react';

export default class TractList extends Component{
    static propTypes = {
        tracts: PropTypes.array
    };
    static defaultProps = {
        tracks: []
    };
    render(){
        return(
            <div className="list-music">
                {
                    this.props.tracts.map((tract, key) => {
                        return <div className="each-item" key={key}><b>Tract:</b> {tract.title}</div>;
                    })
                }
            </div>
        );
    }
}