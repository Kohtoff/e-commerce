import React from 'react';
import { Link } from 'react-router-dom';

import '../../scss/card.scss';
import IconBtn from '../IconBtn/IconBtn';
import PriceSpan from '../PriceSpan/PriceSpan';

export default function ItemCard(props) {
  const { data, size } = props;
  return (
    <article className={'card ' + (size ? `card--${size}` : '')}>
      <Link to={`product/${data.id}`}>
        <img src={process.env.PUBLIC_URL + 'Rectangle 14.png'} alt="" className="card__media" />
        <IconBtn type="fav" />
        <div className="card__color-picker">
          {data.colors.map((item, index) => (
            <div key={index} style={{ background: item }}></div>
          ))}
        </div>
        <h2 className="card__header">{data.title}</h2>
        <PriceSpan>{data.price}</PriceSpan>
      </Link>
    </article>
  );
}
