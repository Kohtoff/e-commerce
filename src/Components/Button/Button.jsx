import React from 'react';

import '../../scss/button.scss';

export default function Button(props) {
  const { children, type, centered, bordered, fontSize, rounded, size } = props;


  return (
    <button
      className={`btn ${fontSize ? `btn--font-size-${fontSize}` : ''} ${
        type ? `btn--${type}` : ''
      } ${size ? `btn--size-${size}` : ''} ${centered ? 'btn--centered' : ''} ${bordered ? 'btn--bordered' : ''} ${
        rounded ? 'btn--rounded' : ''
      }`}>
      {children}
    </button>
  );
}
