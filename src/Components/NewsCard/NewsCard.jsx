import React from 'react';
import '../../scss/news-card.scss';

export default function NewsCard(props) {
  const { data } = props;
  const { title, category, media } = data;
  return (
    <article className="news-card">
      <div className="news-card__media">
        <img src={process.env.PUBLIC_URL + media} alt="" />
      </div>
      <div className="news-card__content">
        <span className="news-card__category">{category}</span>
        <h3 className="news-card__title">{title}</h3>
      </div>
    </article>
  );
}
