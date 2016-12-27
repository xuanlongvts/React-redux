import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = () => (
    <p>
        Show: &nbsp;&nbsp;
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>&nbsp;&nbsp;
        <FilterLink filter="SHOW_ACTIVE">
            ACTIVE
        </FilterLink>&nbsp;&nbsp;
        <FilterLink filter="SHOW_COMPLETED">
            COMPLETED
        </FilterLink>
    </p>
);

export default Footer;