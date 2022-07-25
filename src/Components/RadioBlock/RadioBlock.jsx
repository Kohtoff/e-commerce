import React from 'react';

import '../../scss/radio-block.scss';

export default function RadioBlock(props) {
  const { children, imgs, name } = props;

  return (
    <div className="radio-block">
      <input className="radio-block__button" id={`radio-${name}`} type="radio" />
      <label htmlFor={`radio-${name}`}>
        {children}
        {imgs
          ? imgs.map((item, index) => (
              <img alt="card" key={index} src={process.env.PUBLIC_URL + item} />
            ))
          : null}
      </label>
    </div>
  );
}
