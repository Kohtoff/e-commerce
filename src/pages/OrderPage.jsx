import React from 'react';
import Divider from '../Components/Divider/Divider';
import H from '../Components/H/H';
import Input from '../Components/Input/Input';
import OrderInfo from '../Components/OrderInfo/OrderInfo';
import OrderRow from '../Components/OrderRow/OrderRow';
import RadioRow from '../Components/RadioRow/RadioRow';

import '../scss/order.scss';

export default function OrderPage() {
  const cart = [
    {
      title: 'sport bike',
      color: 'green',
      size: 'small',
      price: '2000',
      isSale: true,
      discountValue: 15,
      amount: 2,
      media: '/Rectangle 14.png',
    },
    {
      title: 'sport bike',
      color: 'green',
      size: 'small',
      price: '2000',
      isSale: true,
      discountValue: 15,
      amount: 2,
      media: '/Rectangle 14.png',
    },
    {
      title: 'Burger',
      color: 'default',
      size: 'XXL',
      price: '2.3',
      amount: '3',
      media: '/Rectangle 14.png',
    },
  ];
  const fields = {
    personalInfo: [
      { name: 'telephone', type: 'number' },
      { name: 'email', type: 'email' },
    ],
    delivery: [{ name: 'city', type: 'text' }],
    adress: [
      { name: 'street', type: 'text' },
      { name: 'house number', type: 'number' },
      { name: 'apartment number', type: 'number' },
    ],
  };

  const options = {
    payment: [
      {title: 'Online', imgs: ["Visa.png", 'MasterCard.png']},
      {title: 'on delivery with cart', imgs: ["Visa.png", 'MasterCard.png']},
      {title: 'on delivery with cash'}

    ],
    delivery: [
      { title: 'self-delivery - showroom', desc: 'in 3 days' },
      { title: 'self-delivery - shop', desc: 'in 3 days' },
      {title: 'courier - DHL', desc: 'in 14 days'}
    ],
  };

  return (
    <div className="order">
      <div className="order__fields">
        <H level={2}>Placing the order</H>
        <Divider />
        <OrderRow fields={fields.personalInfo}>Personal info</OrderRow>
        <Divider />
        <OrderRow fields={fields.delivery}>Delivery</OrderRow>
        <OrderRow fields={fields.adress} inLineFields={['house number', 'apartment number']}>
          Adress
        </OrderRow>
        <RadioRow options={options.payment}>Payment options</RadioRow>
        <RadioRow options={options.delivery}>Delivery options</RadioRow>
        <Divider />
        <Input placeholder={'Message'} mode="textarea" floatingLabel={true}/>

      </div>
      <OrderInfo data={cart} extended={true}  />
    </div>
  );
}
