import React from 'react';
import '../../scss/option-picker.scss';

export default function OptionPicker(props) {
    const {data, mode, type} = props;

  return (
    <div className="option-picker">
      {data.map((item, index) => (
        <div className={`option-picker__item option-picker__item--${mode}`} key={index} style={{ background: item }}>{type === "string" && item}</div>
      ))}
    </div>
  );
}
