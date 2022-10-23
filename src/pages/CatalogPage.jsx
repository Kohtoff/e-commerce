import React from 'react'
import H from '../Components/H/H';
import ItemCard from '../Components/ItemCard/ItemCard';

import '../scss/catalog.scss'

export default function CatalogPage() {

  const products = [
    {
      title: 'sport bike',
      colors: ['green', 'red', 'orange'],
      size: 'small',
      price: '2000',
      isSale: true,
      discountValue: 15,
      amount: 2,
      media: '/Rectangle14.png',
      sizes: [30, 31, 32, 33, 34]
    },
    {
      title: 'sport bike',
      colors: ['green', 'red', 'orange'],
      size: 'small',
      price: '2000',
      isSale: true,
      discountValue: 15,
      amount: 2,
      media: '/Rectangle14.png',
      sizes: [30, 34]
    },
    {
      title: 'Burger',
      colors: ['default', 'red', 'orange'],
      size: 'XXL',
      price: '2.3',
      amount: '3',
      media: '/Rectangle14.png',
      sizes: [30, 31, 32, 33, 34]
    },
    {
      title: 'sport bike',
      colors: ['green', 'red', 'orange'],
      size: 'small',
      price: '2000',
      isSale: true,
      discountValue: 15,
      amount: 2,
      media: '/Rectangle14.png',
      sizes: [30, 31, 32, 33, 34]
    },
    {
      title: 'sport bike',
      colors: ['green', 'red', 'orange'],
      size: 'small',
      price: '2000',
      isSale: true,
      discountValue: 15,
      amount: 2,
      media: '/Rectangle14.png',
      sizes: [30, 31, 32, 33, 34]
    },
    {
      title: 'Burger',
      colors: ['default', 'red', 'orange'],
      size: 'XXL',
      price: '2.3',
      amount: '3',
      media: '/Rectangle14.png',
      sizes: [30, 31, 32, 33, 34]
    },
    {
      title: 'sport bike',
      colors: ['green', 'red', 'orange'],
      size: 'small',
      price: '2000',
      isSale: true,
      discountValue: 15,
      amount: 2,
      media: '/Rectangle14.png',
      sizes: [30, 34]
    },
    {
      title: 'sport bike',
      colors: ['green', 'red', 'orange'],
      size: 'small',
      price: '2000',
      isSale: true,
      discountValue: 15,
      amount: 2,
      media: '/Rectangle14.png',
      sizes: [30, 31, 32, 33, 34]
    },
    {
      title: 'Burger',
      colors: ['default', 'red', 'orange'],
      size: 'XXL',
      price: '2.3',
      amount: '3',
      media: '/Rectangle14.png',
      sizes: [30, 31, 32, 33, 34]
    },
  ]

  return (
    <div className='catalog'>
      <H level={2}>Catalog</H>

      <ul className='catalog__product-list'>
        {products.map((product, index) => <ItemCard key={index} size='large' data={product} />)}
      </ul>
    </div>
  )
}
