import React from 'react';
import '../../scss/custom-link.scss'

export default function CustomLink(props) {
  const { children, href} = props;
  let {type} = props
  type = type ? type : 'default'
  return <a href={href} className={`link link--${type}`}>{children}</a>;
}
