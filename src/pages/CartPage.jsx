import React from 'react';
import Button from '../Components/Button/Button';
import Carousel from '../Components/Carousel/Carousel';
import EmptyCartSvg from '../Components/EmptyCartSvg/EmptyCartSvg';
import MyLink from '../Components/MyLink/MyLink';
import OrderInfo from '../Components/OrderInfo/OrderInfo';
import ProductInCart from '../Components/ProductInCart/ProductInCart';
import {useCart} from '../hooks/useCart'

import '../scss/cart.scss';

export default function CartPage() {
  // const cart = [
  //   {
  //     title: 'sport bike',
  //     color: 'green',
  //     size: 'small',
  //     price: '2000',
  //     isSale: true,
  //     discountValue: 15,
  //     amount: 2,
  //     media: '/Rectangle 14.png',
  //   },
  //   {
  //     title: 'sport bike',
  //     color: 'green',
  //     size: 'small',
  //     price: '2000',
  //     isSale: true,
  //     discountValue: 15,
  //     amount: 2,
  //     media: '/Rectangle 14.png',
  //   },
  //   {
  //     title: 'Burger',
  //     color: 'default',
  //     size: 'XXL',
  //     price: '2.3',
  //     amount: '3',
  //     media: '/Rectangle 14.png',
  //   },
  // ];

  // const cart = []

  const cart = useCart();
  const {cartArray} = cart

  const ProductList = (props) => {
    const { data } = props;
    return (
      <ul className="cart__product-list">
        {data.map((item, index) => (
          <ProductInCart key={index} data={item} />
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className={'cart ' + (cartArray.length === 0 ? 'cart--empty' : '')}>
        {cartArray.length === 0 ? (
          <>
            <EmptyCartSvg />
            <h2 className="cart__title">Cart is empty :(</h2>
            <div className="cart__btn-container">
              <MyLink type="filled-primary" size="l" to="/">
                Back to Home
              </MyLink>
              <MyLink type="filled" bordered={true} size="l" to="/catalog">
                Check Catalog
              </MyLink>
            </div>
            <Carousel>Maybe you would like this</Carousel>
          </>
        ) : (
          <>
            <div className="cart__body">
              <div className="cart__topbar">
                <h1 className="cart__title">{cartArray.length} products in cart</h1>
                <Button type="string">Clear cart</Button>
              </div>
              <ProductList data={cartArray} />
            </div>
            <OrderInfo data={cartArray}/>
          </>
        )}
      </div>
      <Carousel />
    </>
  );
}
