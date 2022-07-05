import React from 'react';
import '../../scss/carousel.scss'

export default function CarouselNav(props) {
  const { data } = props;
  return (
    <nav className='carousel-nav'>
      <ul>
        {data.map((item, index) => (
          <li className='carousel-nav__item' key={index}>{item.title}</li>
        ))}
      </ul>
    </nav>
  );
}
