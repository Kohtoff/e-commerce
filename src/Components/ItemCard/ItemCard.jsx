import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../scss/card.scss';
import IconBtn from '../IconBtn/IconBtn';
import PriceSpan from '../PriceSpan/PriceSpan';
import Button from '../Button/Button';

export default function ItemCard(props) {
  const { data, size } = props;
  const [showInfo, toggleShowInfo] = useState(false);
  return (
    <article
      className={'card ' + (size ? `card--${size}` : '')}
      onMouseEnter={() => toggleShowInfo(true)}
      onMouseLeave={() => toggleShowInfo(false)}>
      <Link to={`product/${data.id}`}>
        <img src={process.env.PUBLIC_URL + 'Rectangle 14.png'} alt="" className="card__media" />
      </Link>
      {showInfo && (
        <div className="card__product-info">
          <div className="card__color-picker">
            {data.colors.map((item, index) => (
              <div key={index} style={{ background: item }}></div>
            ))}
          </div>
          <Link to={`product/${data.id}`}>
            <h2 className="card__header">{data.title}</h2>
          </Link>
          <PriceSpan>{data.price}</PriceSpan>
          <div className="card__button-container">
            <Button type="filled-primary" size='sm'>Add to cart</Button>
            <Button type="filled" bordered='true' size='sm'>View more</Button>
          </div>
        </div>
      )}
      <IconBtn type="fav" />
    </article>
  );
}
