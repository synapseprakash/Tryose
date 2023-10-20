import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseOver = (star) => {
    setHoveredRating(star);
  };

  const handleMouseOut = () => {
    setHoveredRating(0);
  };

  const handleClick = (star) => {
    onRatingChange(star);
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className={i <= (hoveredRating || rating) ? 'star-filled' : 'star-empty'}
        onMouseOver={() => handleMouseOver(i)}
        onMouseOut={handleMouseOut}
        onClick={() => handleClick(i)}
      />
    );
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
