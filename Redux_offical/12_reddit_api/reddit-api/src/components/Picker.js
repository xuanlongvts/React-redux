import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Picker extends Component{
    
    render() {
        const { options, value, onChange } = this.props;

        return (
            <span>
                <h1>{value}</h1>
                <select value={value} onChange={e => onChange(e.target.value)}>
                    {
                        options &&
                        options.map((item, key) => (
                            <option key={key}>
                                {item}
                            </option>
                        ))
                    }
                </select>
            </span>
        )
    }
}

PropTypes.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.string.isRequired
}

export default Picker;