import React from 'react';
import '../../scss/review-card.scss';
import Button from '../Button/Button';
import StarRating from '../StarRating/StarRating';

export default function ReviewCard(props) {
  const { data } = props;
  const { author, rating, text } = data;
  let { date } = data;

  return (
    <article className="review-card">
      <div className="review-card__header">
        <div>
          <span>{date}</span>
          <h2>{author}</h2>
        </div>
        <StarRating value={rating} />
      </div>
      <svg className='review-card__citation' xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17">
        <path
          data-name="” copy 9"
          d="M451.367,226.9a12.463,12.463,0,0,1,3.854-3.57,11.664,11.664,0,0,1,3.76-1.307v0A0.868,0.868,0,0,1,459.1,222a0.914,0.914,0,0,1,.917.911,0.9,0.9,0,0,1-.652.858l0,0.015a13,13,0,0,0-3.277,1.821c-1.2,1.028-2.185,1.886-2.152,2.958a1.266,1.266,0,0,0,.6,1.109,4.223,4.223,0,0,0,1.853.327,5.163,5.163,0,0,1,3.439,1.038,4.636,4.636,0,0,1,1.177,3.309,4.384,4.384,0,0,1-1.4,3.332A5.005,5.005,0,0,1,456.027,239a5.193,5.193,0,0,1-3.107-.977,6.626,6.626,0,0,1-2.142-2.7,9.345,9.345,0,0,1-.784-3.907A7.494,7.494,0,0,1,451.367,226.9Zm13,0a12.463,12.463,0,0,1,3.854-3.57,11.664,11.664,0,0,1,3.76-1.307v0A0.868,0.868,0,0,1,472.1,222a0.914,0.914,0,0,1,.917.911,0.9,0.9,0,0,1-.652.858l0,0.015a13,13,0,0,0-3.277,1.821c-1.2,1.028-2.185,1.886-2.152,2.958a1.266,1.266,0,0,0,.6,1.109,4.226,4.226,0,0,0,1.853.327,5.163,5.163,0,0,1,3.439,1.038,4.636,4.636,0,0,1,1.177,3.309,4.384,4.384,0,0,1-1.4,3.332A5.005,5.005,0,0,1,469.027,239a5.193,5.193,0,0,1-3.107-.977,6.626,6.626,0,0,1-2.142-2.7,9.345,9.345,0,0,1-.784-3.907A7.494,7.494,0,0,1,464.367,226.9Z"
          transform="translate(-450 -222)"></path>
      </svg>
      <p>{text}</p>
      <Button bordered={true} rounded={true} type="filled" size="sm">
        Read more
      </Button>
    </article>
  );
}
