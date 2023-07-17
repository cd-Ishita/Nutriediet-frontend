import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GooglePlacesReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('/api/places/reviews');

        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.time}>
          <h4>{review.author_name}</h4>
          <p>{review.rating} stars</p>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default GooglePlacesReviews;
