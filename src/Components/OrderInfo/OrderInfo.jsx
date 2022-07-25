import React from 'react';
import MyLink from '../MyLink/MyLink';
import '../../scss/order-info.scss';
import Divider from '../Divider/Divider';

export default function OrderInfo(props) {
  const { data, extended } = props;
  return (
    <div className="order-info">
      {extended && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.title}
              <p>
              {item.amount}x{item.price} {(Number(item.amount)*Number(item.price)).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
      )}
      <h2 className="order-info__title">Order Info</h2>
      <Divider />
      <ul className="">
        <li className="order-info__service">
          Items ({data.length}) <span>2910</span>
        </li>
        <li className="order-info__service">
          discount <span>2910</span>
        </li>
      </ul>
      <div className="order-info__total">
        Total: <span>{2910 * 2}</span>
      </div>
      <MyLink to="/order" type="filled-primary" size="full-width">
        Make order
      </MyLink>
    </div>
  );
}
