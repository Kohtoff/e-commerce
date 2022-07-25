import React from 'react';
import ConditionalWrapper from '../ConditionalWrapper.js/ConditionalWrapper';
import '../../scss/input.scss';

export default function Input(props) {
  const { type, label, placeholder, name, floatingLabel, mode } = props;

  const CustomTag = mode ? `${mode}` : 'input'


  return (
    <ConditionalWrapper
      condition={label}
      wrapper={(children) => (
        <label className="input-label" htmlFor={`input-${name}`}>
          {label}
          {children}
        </label>
      )}>
      <div className='input-container'>
        <CustomTag id={`input-${name}`} className={'input'} name={name} placeholder=' ' type={type} />
        {floatingLabel && <span className="input__floating-label">{placeholder}</span>}
      </div>
    </ConditionalWrapper>
  );
}
