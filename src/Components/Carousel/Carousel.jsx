import React from 'react';
import CarouselNav from '../CarouselNav/CarouselNav';
import ItemCard from '../ItemCard/ItemCard';

export default function Carousel(props) {
  const {type, children} = props;
  const navItems = [{ title: 'New products' }, { title: 'Collections' }, { title: 'Sales' }];
  const goods = [
    {
      id: 1,
      title: 'Nice bike',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dicta?',
      price: 43,
      colors: ['#e91111', '#e9c111'],
      photo: '',
    },
    {
      id: 2,
      title: 'Silly umbrella',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dicta?',
      price: 999,
      colors: ['#e91111', '#e9c111'],
      photo: '',
    },
    {
      id: 3,
      title: 'World of ants',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dicta?',
      price: 12,
      colors: ['#e91111', '#e9c111'],
      photo: '',
    },
    {
      id: 4,
      title: 'X-ray commandos',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dicta?',
      price: 1232,
      colors: ['#e91111', '#e9c111'],
      photo: '',
    },
    {
      id: 5,
      title: 'Sport book',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dicta?',
      price: 166,
      colors: ['#e91111', '#e9c111'],
      photo: '',
    },
  ];
  return (
    <section className="carousel-container">
      {type === 'default' ?
      <CarouselNav data={navItems} /> : <h2 className='carousel__title'>{children}</h2>}
      {/* <CarouselNav data={navItems}/> */}
      <div className="cards-container">
        {goods.map((item, index) => (
          <ItemCard data={item} key={index} />
        ))}
      </div>
    </section>
  );
}
