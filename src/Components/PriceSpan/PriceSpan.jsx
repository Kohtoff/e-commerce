import React from 'react';

import '../../scss/price-span.scss'

export default function PriceSpan({children, size = 'default'}) {
    // const {children: value, size = 'default'} = props
  return (
    <span className={"price price--" +size}>{children} usd</span>
  )
}

