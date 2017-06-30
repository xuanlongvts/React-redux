import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Posts extends Component{
    
    render(){
        return (
            <ul>
            {
                this.props.posts && 
                this.props.posts.map((item, key) =>
                    <li key={key}>
                        {item.title}
                    </li>
                )
            }
            </ul>    
        )
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired
}

export default Posts;