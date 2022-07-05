import React from 'react'

export default function NavItem(props) {
    const {children} = props
  return (
    <li className='navbar__item'>{children}</li>
  )
}
