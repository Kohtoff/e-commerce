import React from 'react';
import H from '../H/H';
import { firstLetterToUpperCase } from '../../utils/firstLetterToUpperCase.ts';
import Input from '../Input/Input';

import '../../scss/order.scss';

export default function OrderRow(props) {
  const { children } = props;
  let {fields} = props;



  return (
    <div className="order__row">
      <H level={3}>{children}</H>
      <div className="order__input-container">
        {fields.map((item, index) => {
          return (
            <Input
              key={index}
              floatingLabel={true}
              type={item.type}
              placeholder={firstLetterToUpperCase(item.name)}
            />
          );
        })}
      </div>
    </div>
  );
}
