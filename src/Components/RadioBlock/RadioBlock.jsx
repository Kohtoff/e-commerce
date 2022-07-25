import React from 'react';
import { firstLetterToUpperCase } from '../../utils/firstLetterToUpperCase.ts';

import '../../scss/radio-block.scss';

export default function RadioBlock(props) {
  const { children } = props;

  return (
    <div className="radio-block">
      <input className="radio-block__button" id={`radio-${children}`} type="radio" />
      <label  htmlFor={`radio-${children}`}>
        {firstLetterToUpperCase(children)}
      </label>
    </div>
  );
}
