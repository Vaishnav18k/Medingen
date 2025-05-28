// ReviewsSection.jsx

import './ReviewsSection.css';

interface Review {
  rating: number;
  comment: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
}

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  return (
    <section className="reviews-section">
      <h2>Ratings & Reviews</h2>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  <i className={`fas fa-star${i < review.rating ? '' : '-regular'}`}></i>
                </span>
              ))}
              <span>{review.rating}</span>
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;