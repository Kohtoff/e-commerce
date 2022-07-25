import React from 'react';
import '../../scss/h.scss';

export default function H(props) {
    const {level, children} = props
    const CustomTag = `h${level}`;

  return (
    <CustomTag className={`title-h${level}`}>{children}</CustomTag>
  )
}
