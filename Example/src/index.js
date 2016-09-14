import React from 'react';
import ReactDOM from 'react-dom';
import TractList from './components/TractList';

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
    <TractList tracts={tracks}/>,
    document.getElementById('app')
);