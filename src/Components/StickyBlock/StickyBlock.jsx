import React from 'react';

import '../../scss/sticky-block.scss';

export default function StickyBlock(props) {
  const {children} = props
  return (
    <div className={'sticky-block ' + props.className}>
      {children}
    </div>
  )
}
