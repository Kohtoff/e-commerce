import React from 'react'
import NavItem from '../NavItem/NavItem'

import '../../scss/navbar.scss'

export default function NavBar(props) {
    const {data, isDisplay} = props

  return (
    <nav style={isDisplay ? {display: 'none'} : {}}>
        <ul className='navbar'>
            {data.map((item, index) => (
                <NavItem key={index}>{item.title}</NavItem>
            ))}
        </ul>
    </nav>
  )
}
