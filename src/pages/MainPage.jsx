import React from 'react';

import Banner from '../Components/Banner/Banner';
import Carousel from '../Components/Carousel/Carousel';
import BookForm from '../Components/BookForm/BookForm';
import ReviewBlock from '../Components/ReviewBlock/ReviewBlock';
import LastNewsBlock from '../Components/LastNewsBlock/LastNewsBlock';
import BrandsBlock from '../Components/BrandsBlock/BrandsBlock';

export default function MainPage() {
  return (
    <>
      <Banner />
      <Carousel type='default'/>
      <BookForm />
      <ReviewBlock />
      <LastNewsBlock />
      <BrandsBlock />
    </>
  );
}
