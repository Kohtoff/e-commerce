import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

export default function MyLink(props) {
  const { children, to, type, centered, bordered, rounded, size } = props;
  return (
    <Link to={to} className={'f'}>
      <Button
        type={type}
        centered={centered ? true : false}
        bordered={bordered ? true : false}
        rounded={rounded ? true : false}
        size={size}>

        {children}
      </Button>
    </Link>
  );
}
