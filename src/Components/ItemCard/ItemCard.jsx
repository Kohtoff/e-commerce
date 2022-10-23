import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { pushToCart } from '../../ducks/cart.duck';

import '../../scss/card.scss';
import IconBtn from '../IconBtn/IconBtn';
import PriceSpan from '../PriceSpan/PriceSpan';
import Button from '../Button/Button';
import OptionPicker from '../OptionPicker/OptionPicker';

export default function ItemCard(props) {
  const { data, size } = props;
  const [showInfo, toggleShowInfo] = useState(false);
  const dispatch = useDispatch();

  return (
    <article
      className={'card ' + (size ? `card--${size}` : '')}
      onMouseEnter={() => toggleShowInfo(true)}
      onMouseLeave={() => toggleShowInfo(false)}>
      <Link to={`product/${data.id}`}>
        <img src={process.env.PUBLIC_URL + 'Rectangle14.png'} alt="" className="card__media" />
      </Link>
      {showInfo && (
        <div className="card__product-info">
          <OptionPicker data={data.colors} mode="rounded" />

          <Link to={`product/${data.id}`}>
            <h2 className="card__header">{data.title}</h2>
          </Link>
          <PriceSpan>{data.price}</PriceSpan>
          <div className="card__button-container">
            <Button type="filled-primary" size="sm"
            onClick={() => dispatch(pushToCart({...data}))}>
              Add to cart
            </Button>
            <Link to={`product/${data.id}`}>
              <Button type="filled" bordered={true} size="sm">
                View more
              </Button>
            </Link>
          </div>
        </div>
      )}
      <IconBtn type="fav" />
    </article>
  );
}
