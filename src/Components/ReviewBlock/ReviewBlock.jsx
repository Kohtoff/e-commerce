import React from 'react';
import Button from '../Button/Button';
import CustomLink from '../CustomLink/CustomLink';
import '../../scss/review-block.scss';
import ReviewCard from '../ReviewCard/ReviewCard';

export default function ReviewBlock() {
  const reviews = [
    {
      author: 'Rebecca Heinz',
      date: '2022-09-01',
      rating: 4.5,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum dolor asperiores voluptate sit nihil eveniet doloribus consequuntur quia, rerum ullam quasi! Nisi, aliquid cupiditate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum dolor asperiores voluptate sit nihil eveniet doloribus consequuntur quia, rerum ullam quasi! Nisi, aliquid cupiditate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum dolor asperiores voluptate sit nihil eveniet doloribus consequuntur quia, rerum ullam quasi! Nisi, aliquid cupiditate?',
    },
    {
      author: 'Semen Vlasenko',
      date: '2022-09-01', 
      rating: 2,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum dolor asperiores voluptate sit nihil eveniet doloribus consequuntur quia, rerum ullam quasi! Nisi, aliquid cupiditate?',
    },
    // {
    //   author: 'Mateusz Barlowski',
    //   date: '2022-09-01',
    //   rating: 3,
    //   text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum dolor asperiores voluptate sit nihil eveniet doloribus consequuntur quia, rerum ullam quasi! Nisi, aliquid cupiditate?',
    // },
    // {
    //   author: 'Boris Johnson',
    //   date: '2022-09-01',
    //   rating: 5,
    //   text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum dolor asperiores voluptate sit nihil eveniet doloribus consequuntur quia, rerum ullam quasi! Nisi, aliquid cupiditate?',
    // },
  ];
  return (
    <div className="review-block">
      <div className="review-block__header">
        <h2>What our clients say</h2>
        <div>
          <CustomLink href="#" type="grey">
            Check all reviews
          </CustomLink>
          <Button type="string" fontSize="sm">
            Leave a review
          </Button>
        </div>
      </div>
      <div className="review-block__carousel">
        {reviews.map((review, index) => (<ReviewCard data={review} key={index}/>))}
      </div>
    </div>
  );
}
