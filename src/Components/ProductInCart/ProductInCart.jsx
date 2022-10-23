import React from 'react';
import IconBtn from '../IconBtn/IconBtn';

import '../../scss/productInCart.scss'

export default function ProductInCart(props) {
  const { data } = props;
  const { title, color, size, amount, price, img, isSale, discountValue } = data;
  const totalPrice = (+amount * +price).toFixed(2);

  console.log(amount, price)

  return (
    <li className="product-in-cart">
      <div className="product-in-cart__media">
        <img src={process.env.PUBLIC_URL + img} alt="product`s" />
      </div>
      <div className="product-in-cart__info-container">
        <h3 className="product-in-cart__title">{title}</h3>
        <p className="product-in-cart__details">
          Color: {color}
          <br />
          Size: {size}
        </p>
      </div>
      <div className="product-in-cart__prices">
        <div></div>
        <span className="product-in-cart__price-calculation">
          {+amount} x ${price}
        </span>
        <span
          className={
            'product-in-cart__total-price ' +
            (isSale ? 'product-in-cart__total-price--overlined' : '')
          }>
          ${totalPrice}
        </span>
        {isSale && (
          <span className="product-in-cart__reduced-price">
            ${totalPrice - totalPrice * (discountValue / 100)}
            (-{discountValue}%)
          </span>
        )}
      </div>
      <div className="product-in-cart__btn-container">
        <IconBtn type="fav" />
        <IconBtn type="cross" />
      </div>
    </li>
  );
}
