import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = () => (
    <p>
        Show: &nbsp;&nbsp;
        <FilterLink filter="SHOW_ALL">
            All</FilterLink>&nbsp;&nbsp;
        <FilterLink filter="SHOW_ACTIVE">
            Active</FilterLink>&nbsp;&nbsp;
        <FilterLink filter="SHOW_COMPLETED">
            Completed</FilterLink>&nbsp;&nbsp;
    </p>
);

export default Footer;