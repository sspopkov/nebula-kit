import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ value, onChange, placeholder }) => {
    return (
        <input
            className="input"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

Input.propTypes = {
    /** Значение инпута */
    value: PropTypes.string,
    /** Обработчик изменения */
    onChange: PropTypes.func,
    /** Плейсхолдер */
    placeholder: PropTypes.string
};

Input.defaultProps = {
    value: '',
    onChange: () => {},
    placeholder: ''
};

export default Input;
