import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, onClick, type }) => {
    return (
        <button className={`btn btn--${type}`} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    /** Текст внутри кнопки */
    children: PropTypes.node.isRequired,
    /** Обработчик клика */
    onClick: PropTypes.func,
    /** Тип кнопки */
    type: PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
};

Button.defaultProps = {
    type: 'primary',
    onClick: () => {}
};

export default Button;
