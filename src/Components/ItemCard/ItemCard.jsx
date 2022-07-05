import React from 'react';

import '../../scss/card.scss';
import IconBtn from '../IconBtn/IconBtn';

export default function ItemCard(props) {
  const { data } = props;
  return (
    <article className="card">
      <img src={process.env.PUBLIC_URL + 'Rectangle 14.png'} alt="" className="card__media" />
      <IconBtn type='fav' />
      <div className="card__color-picker">
        {data.colors.map((item, index) => (
          <div key={index} style={{background: item}}></div>
        ))}
      </div>
      <h2 className="card__header">{data.title}</h2>
      <span className="card__price">{data.price} usd</span>
    </article>
  );
}
