import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';

export const selectSubreddit = subreddit => ({
    type: SELECT_SUBREDDIT,
    subreddit
});

export const invalidateSubreddit = subreddit => ({
    type: INVALIDATE_SUBREDDIT,
    subreddit
});

const requestPosts = subreddit => ({
    type: REQUEST_POSTS,
    subreddit
});

const receivePosts = (subreddit, json) => ({
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
});

const fetchPosts = subreddit => {
    return dispatch => {
        dispatch(requestPosts(subreddit));

        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(res => res.json())
            .then(json => {
                return dispatch(receivePosts(subreddit, json));
            })
            .catch(json => {
                console.log('json: ', json);
            });
    }
}

export const fetchPostsIfNeeded = subreddit => {
    return (dispatch, getState) => {
        return dispatch(fetchPosts(subreddit));
    }
}