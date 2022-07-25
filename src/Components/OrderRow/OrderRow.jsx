import React from 'react';
import H from '../H/H';
import { firstLetterToUpperCase } from '../../utils/firstLetterToUpperCase.ts';
import Input from '../Input/Input';

import '../../scss/order.scss';

export default function OrderRow(props) {
  const { children, inLineFields = [] } = props;
  let { fields } = props;

  const flexedFields = fields.filter((item) => inLineFields.includes(item.name))
  fields = fields.filter((item) => !inLineFields.includes(item.name));

  console.log(fields, inLineFields);

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
        {inLineFields.length > 0 && (
          <div className="order__input-container order__input-container--flexed">
            {flexedFields.map((item, index) => (
              <Input
                key={index}
                floatingLabel={true}
                type={item.type}
                placeholder={firstLetterToUpperCase(item.name)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
