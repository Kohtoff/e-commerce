import React from 'react';

import '../../scss/banner-section.scss';
import Button from '../Button/Button';

export default function Banner() {
  return (
    <section className="banner-section">
      <div className="banner-section__item banner-section__item--main">
        <div className="mask">
          <div className="banner-item__content">
            <h1 className="banner-item__header">Title of the banner nothing special</h1>
            <span className="banner-item__desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi odio delectus fugiat.
            </span>
            <Button type="filled" centered={true}>
              Read more
            </Button>
          </div>
        </div>
      </div>
      <div className="banner-section__item banner-section__item--2">
        <div className="mask">
          <div className="banner-item__content">
            <h2 className="banner-item__header">Title</h2>
            <Button type="outlined"> Visit catalog</Button>
          </div>
        </div>
      </div>
      <div className="banner-section__item banner-section__item--3">
        <div className="mask">
          <div className="banner-item__content">
            <h2 className="banner-item__header">Promotion!</h2>
            <Button type="outlined">Read more</Button>
          </div>
        </div>
      </div>{' '}
    </section>
  );
}
