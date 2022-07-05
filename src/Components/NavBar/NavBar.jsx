import React from 'react'
import NavItem from '../NavItem/NavItem'

import '../../scss/navbar.scss'

export default function NavBar(props) {
    const {data} = props

  return (
    <nav>
        <ul className='navbar'>
            {data.map((item, index) => (
                <NavItem key={index}>{item.title}</NavItem>
            ))}
        </ul>
    </nav>
  )
}
