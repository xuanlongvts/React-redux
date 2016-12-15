import React, {Component} from 'react';
import Search from '../container/youtube/Search';
import Video from '../container/youtube/Video';

export default class Youtube extends Component{
    render(){
        return(
            <div>
                <h1>Youtobe</h1>
                <Search/>
                <Video/>
            </div>
        )
    }
}