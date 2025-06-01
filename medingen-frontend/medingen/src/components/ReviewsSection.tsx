// ReviewsSection.tsx
import React from 'react';
import './ReviewsSection.css';

interface Review {
  id: number;
  rating: number;
  comment: string | null;
  created_at: string;
  product_id: number;
}

interface Props {
  reviews: Review[];
}

const ReviewsSection: React.FC<Props> = ({ reviews }) => {
  // Filter reviews for product_id = 1
  const productReviews = reviews.filter(review => review.product_id === 1);

  // Check if there are any reviews for product_id = 1
  if (productReviews.length === 0) {
    return (
      <section className="reviews-section">
        <h2>Ratings & Reviews</h2>
        <p>No reviews available for this product.</p>
      </section>
    );
  }

  return (
    <section className="reviews-section">
      <h2>Ratings & Reviews</h2>
      <div className="review-list">
        {productReviews.map((review) => (
          <div key={review.id} className="review-item">
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  <i className={`fas fa-star${i < review.rating ? '' : '-regular'}`}></i>
                </span>
              ))}
              <span>{review.rating}</span>
            </div>
            <p>{review.comment || 'No comment provided.'}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;