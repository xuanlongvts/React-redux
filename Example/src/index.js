import React from 'react';
import ReactDOM from 'react-dom';
import TrackList from './components/TrackList';

const tracks = [
    {
        id: 1,
        title: 'Sầu tím thiệp hồng'
    },
    {
        id: 2,
        title: 'Cơn mưa ngang qua'
    }
];

ReactDOM.render(
    <TrackList tracks={tracks}/>,
    document.getElementById('app')
);