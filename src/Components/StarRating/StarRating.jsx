import React from 'react';

export default function StarRating(props) {
  const { value } = props;

  function Star(props) {
    const { filled } = props;
    return (
      <svg
        style={{ fill: `${filled ? '#D9A95E' : 'lightgrey'}` }}
        xmlns="http://www.w3.org/2000/svg"
        height="21"
        width="21"
        viewBox="0 0 48 48">
        <path d="M11.65 44 16.3 28.8 4 20H19.2L24 4L28.8 20H44L31.7 28.8L36.35 44L24 34.6Z" />
      </svg>
    );
  }

  return (
    <div className="star-rating">
      {[
        ...Array.from({ length: 5 }).map((item, index) => (
          <Star filled={value >= index + 1 ? true : false} key={index} />
        )),
      ]}
    </div>
  );
}
