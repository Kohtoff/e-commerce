import React from 'react';
import '../../scss/book-form.scss';
import Button from '../Button/Button';
import BgEffects from './BgEffects';

export default function BookForm() {
  return (
    <section className="book-section">
      <BgEffects />
      <form className="book-form">
        <h2 className="book-form__header">Book a something</h2>
        <p className="book-form__desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum non voluptatum maxime
          numquam optio tempore iste nihil perferendis.
        </p>
        <p className="book-form__additional-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laudantium natus, ducimus
          facilis expedita cupiditate explicabo voluptates dolores sed, voluptatem temporibus facere
          totam, praesentium itaque.
        </p>
        <div className="book-form__buttons">
          <Button type="filled-primary">Book a metting</Button>
          <Button type="filled" bordered={true}>Check reviews</Button>
        </div>
      </form>
    </section>
  );
}
