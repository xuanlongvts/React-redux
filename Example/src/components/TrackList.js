import React, {Component, PropTypes} from 'react';

export default class TrackList extends Component{
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
                    this.props.tracks.map((track, key) => {
                        return <div className="each-item" key={key}><b>Track:</b> {track.title}</div>;
                    })
                }
            </div>
        );
    }
}