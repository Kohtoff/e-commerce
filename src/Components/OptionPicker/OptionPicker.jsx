import React from 'react';
import '../../scss/option-picker.scss';

export default function OptionPicker(props) {
  const { data, mode, type, setValue } = props;


  return (
    <ul className="option-picker">
      {data.map((item, index) => (
        <li
          className={`option-picker__item option-picker__item--${mode}`}
          key={index}
          style={{ background: item.hex }}
          onClick={() => setValue(item.title || item)}
          >
          {type === 'string' && item}
        </li>
      ))}
    </ul>
  );
}
