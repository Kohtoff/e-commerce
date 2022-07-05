import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import '../../scss/news-block.scss';

export default function LastNewsBlock() {
  const news = [
    { title: 'title1', category: 'Fashion', date: '2022-10-31', media: '/Rectangle 8.png' },
    { title: 'title2', category: 'Lifehacks', date: '2022-10-30', media: '/Rectangle 8.png' },
    { title: 'title3', category: 'Advices for everyone', date: '2022-10-28', media: '/Rectangle 8.png' },
    { title: 'title4', category: 'Advices for everyone', date: '2022-09-12', media: '/Rectangle 8.png' },
    { title: 'title5', category: 'Scince', date: '2022-09-01', media: '/Rectangle 8.png' },
  ];
  return (
    <div className="news-block">
      <h2>Last Articles from our blog</h2>
      <div className="news-block__content">

        {news.map((item, index) => (  
          <NewsCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
