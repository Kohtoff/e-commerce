import React from 'react';
import PropTypes from 'prop-types';

import '../../scss/button.scss';

export default function Button(props) {
  const { children, type, centered, bordered, fontSize, rounded, size, onClick } = props;

  return (
    <button
      className={`btn ${fontSize ? `btn--font-size-${fontSize}` : ''} ${
        type ? `btn--${type}` : ''
      } ${size ? `btn--size-${size}` : ''} ${centered ? 'btn--centered' : ''} ${
        bordered ? 'btn--bordered' : ''
      } ${rounded ? 'btn--rounded' : ''}`}
      onClick={onClick}
      >
      {children}
    </button>
  );
}

Button.propTypes = {
  bordered: PropTypes.bool,
  centered: PropTypes.bool,
  rounded: PropTypes.bool,
};

Button.defaultProps = {
  bordered: false,
  centered: false,
  rounded: false,
};
