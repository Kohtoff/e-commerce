import React from 'react';
import Button from '../Components/Button/Button';
import Carousel from '../Components/Carousel/Carousel';
import EmptyCartSvg from '../Components/EmptyCartSvg/EmptyCartSvg';
import MyLink from '../Components/MyLink/MyLink';
import ProductInCart from '../Components/ProductInCart/ProductInCart';

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

  const cart = []

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
    <div className={'cart ' + (cart.length === 0 ? 'cart--empty' : '')}>
      {cart.length === 0 ? (
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
              <h1 className="cart__title">{cart.length} products in cart</h1>
              <Button type="string">Clear cart</Button>
            </div>
            <ProductList data={cart} />
          </div>
          <div className="order-info">
            <h2 className="order-info__title">Order Info</h2>
            <ul className=''>
              <li className='order-info__service'>
                Items ({cart.length}) <span>2910</span>
              </li>
              <li className='order-info__service'>
                discount <span>2910</span>
              </li>
            </ul>
            <div className="order-info__total">
              Total: <span>{2910*2}</span>
            </div>
            <Button type="filled-primary" size='full-width'>Make order</Button>
          </div>
        </>
      )}
    </div>
  );
}
