import React from 'react';
import '../../scss/gallery.scss'

export default function ProductGallery(props) {
  const { imgs } = props;
  return (
    <div className='gallery'>
      {imgs.map((item, index) => (
        <img alt="product" className={`gallery__image gallery__image--${index}`} key={index} src={'/' + item} />
      ))}
    </div>
  );
}
