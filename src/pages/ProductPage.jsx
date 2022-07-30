import React from 'react';
import H from '../Components/H/H';
import PriceSpan from '../Components/PriceSpan/PriceSpan';
import ProductGallery from '../Components/ProductGallery/ProductGallery';
import StickyBlock from '../Components/StickyBlock/StickyBlock';

import '../scss/product-page.scss';

export default function ProductPage() {
  const data = {
    imgs: ['gal1.png', 'gal2.png', 'gal_small1.png', 'gal_small2.png'],
    title: 'Комплект Seleste MIOOCCHI',
    isSale: true,
    price: '2,891',
    producer: 'Textile Co & Co',
    brend: 'Alma mater',
    collection: 'tryzub',
    colors: [],
    sizes: [],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ducimus ut unde eos nam sit nihil deleniti! Expedita culpa vitae quis unde ipsum consectetur, laborum reiciendis deserunt libero sed repellat voluptate. Quo voluptas incidunt deserunt minima odit aliquid cupiditate, officia placeat tempora tenetur sunt voluptate in?',
  };
  return (
    <div className="container">
      <ProductGallery imgs={data.imgs} />
      <StickyBlock className={'product__info-block'}>
        <H level="2">{data.title}</H>
        <PriceSpan size="large">{data.price}</PriceSpan>
        {/* {
          //
        }
        <p>
          <b>Producer:</b>
          {data.producer}
        </p>
        <p>
          <b>Brend:</b>
          {data.brend}
        </p>
        <p>
          <b>Collection:</b>
          {data.collection}
        </p> */}

      </StickyBlock>
    </div>
  );
}
