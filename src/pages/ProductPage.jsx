import React, { useState } from 'react';
import H from '../Components/H/H';
import PriceSpan from '../Components/PriceSpan/PriceSpan';
import ProductGallery from '../Components/ProductGallery/ProductGallery';
import StickyBlock from '../Components/StickyBlock/StickyBlock';

import '../scss/product-page.scss';
import OptionPicker from '../Components/OptionPicker/OptionPicker';
import Button from '../Components/Button/Button';
// import Carousel from '../Components/Carousel/Carousel'
import { useDispatch } from 'react-redux';
import { pushToCart } from '../ducks/cart.duck';

export default function ProductPage() {
  const [size, setSize] = useState('S');
  const [color, setColor] = useState('red');
  const dispatch = useDispatch();

  const data = {
    imgs: ['gal1.png', 'gal2.png', 'gal_small1.png', 'gal_small2.png'],
    title: 'Комплект Seleste MIOOCCHI',
    isSale: true,
    price: '2891',
    producer: 'Textile Co & Co',
    brend: 'Alma mater',
    collection: 'tryzub',
    colors: [{title: 'red', hex: '#e91111'}, {title: 'yellow', hex:'#e9c111'}],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ducimus ut unde eos nam sit nihil deleniti! Expedita culpa vitae quis unde ipsum consectetur, laborum reiciendis deserunt libero sed repellat voluptate. Quo voluptas incidunt deserunt minima odit aliquid cupiditate, officia placeat tempora tenetur sunt voluptate in?',
  };

  const { title, price } = data;

  console.log(size, color)

  return (
    <>
      <div className="container">
        <div className="right-side">
          <ProductGallery imgs={data.imgs} />
          <div className="extra-info">
            <ul>
              <li className="extra-info__item">
                <H level={'4'}>Description</H>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illum autem cum
                  quam sint unde rerum, quos modi repudiandae exercitationem debitis, error
                  voluptatem tempora, deserunt est eligendi quis! Unde praesentium dolores fugit
                  similique, labore quidem reiciendis debitis voluptatibus maxime quos earum. Sunt
                  ea voluptatum ratione sed beatae nisi? A beatae laborum, voluptas nemo,
                  consectetur eaque quam, mollitia reiciendis voluptatibus recusandae quasi est ipsa
                  nobis quia. Tenetur delectus, voluptatem sapiente molestiae similique veniam id
                  ab.
                </p>
              </li>
              <li className="extra-info__item">
                <H level={'4'}>Composition</H>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate modi excepturi
                  libero corrupti accusantium provident consequuntur? Optio quo, harum consequuntur
                  voluptas ipsum error!
                </p>
              </li>
            </ul>
          </div>
        </div>
        <StickyBlock className={'product__info-block'}>
          <H level="2">{data.title}</H>
          <PriceSpan size="large">{data.price}</PriceSpan>
          <ul>
            <li>
              <p>
                Producer:
                <b>{data.producer}</b>
              </p>
            </li>
            <li>
              <p>
                Brend:
                <b>{data.brend}</b>
              </p>
            </li>
            <li>
              <p>
                Collection:
                <b>{data.collection}</b>
              </p>
            </li>
          </ul>
          <H level={'4'}>Choose color</H>
          <OptionPicker data={data.colors} setValue={setColor} mode={'rounded'} />
          <H level={'4'}>Choose size</H>
          <OptionPicker data={data.sizes} setValue={setSize} mode="squared" type="string" />
          <div className="product__controller">
            <Button
              type="filled-primary"
              onClick={() => {
                console.log({ title, price, size, color, img: data.imgs[0] });
                dispatch(pushToCart({ title, price, size, color, img: data.imgs[0] }))}

                }>
              Add to cart
            </Button>
            <Button type="filled" bordered={true}>
              Want as a gift
            </Button>
          </div>
        </StickyBlock>
      </div>
    </>
  );
}
