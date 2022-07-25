import React from 'react';
import H from '../H/H';
import RadioBlock from '../RadioBlock/RadioBlock';
import '../../scss/radio-row.scss';

export default function SelectRow(props) {
    const {options, children} = props
  return (
    <div className='order_row'>
        <H level={3}>{children}</H>
        <div className="select__container">
            {options.map((item, index) => (<RadioBlock key={index}>{item.title}</RadioBlock>))}
        </div>
    </div>
  )
}
