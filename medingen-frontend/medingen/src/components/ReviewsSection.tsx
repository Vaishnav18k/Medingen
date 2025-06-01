import React from "react";
import "./ReviewsSection.css";
import Rating from "@mui/material/Rating";
import card from "../assets/card.jpg";
import hand from "../assets/hand.jpg";
import like from "../assets/like.jpg";

interface Review {
  id: number;
  rating: number;
  comment: string | null;
  created_at: string;
  product_id: number;
  reviewsection: { comment: string; product_id: number; rating: number };
}

interface Props {
  reviews: Review[];
}

const ReviewsSection: React.FC<Props> = ({ reviews }) => {
  // Filter reviews for product_id = 1
  const productReviews = reviews.filter((review) => review.product_id === 1);

  // Check if there are any reviews for product_id = 1
  if (productReviews.length === 0) {
    return (
      <section className="reviews-section">
        <h2>Ratings & Reviews</h2>
        <p>No reviews available for this product.</p>
        <h2>Disclaimer</h2>
        <p className="disclaimer">
          The contents here is for informational purposes only and not intended to be a substitute for professional medical advice, diagnosis, or treatment. Please seek the advice of a physician or other qualified health provider with any questions you may have regarding a medical condition. Medkart on any information and subsequent action or inaction is solely at the user's risk, and we do not assume any responsibility for the same. The content on the Platform should not be considered or used as a substitute for professional and qualified medical advice. Please consult your doctor for any query pertaining to medicines, tests and/or diseases, as we support, and do not replace the doctor-patient relationship.
        </p>
        <div className="features-container">
          <div className="feature-item">
            <img src={card} alt="Safe Payment Icon" className="feature-icon" />
            <p className="feature-text">
              <span className="feature-highlight">Safe and Secure</span>
              <br />
              Payment
            </p>
          </div>
          <div className="feature-item">
            <img src={hand} alt="Authentic Products Icon" className="feature-icon" />
            <p className="feature-text">
              <span className="feature-highlight">100% Authentic</span>
              <br />
              Products
            </p>
          </div>
          <div className="feature-item">
            <img src={like} alt="Happy Customers Icon" className="feature-icon" />
            <p className="feature-text">
              <span className="feature-highlight">6 Lac + Happy</span>
              <br />
              Customers
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="reviews-section">
      <h2>Ratings & Reviews</h2>
      <div className="ratings">
        {productReviews.map((review) => (
          <div key={review.id} className="single-review">
            <div className="rating-container">
              <Rating
                name={`rating-${review.id}`}
                value={review.rating}
                readOnly
                precision={0.5}
                size="large"
              />
              <span className="rating-number">{review.rating.toFixed(1)}</span>
            </div>
            <p className="comment">
              {review.comment ? review.comment : "Review not available"}
            </p>
          </div>
        ))}
      </div>
      <h2>Disclaimer</h2>
      <p className="disclaimer">
        The contents here is for informational purposes only and not intended to be a substitute for professional medical advice, diagnosis, or treatment. Please seek the advice of a physician or other qualified health provider with any questions you may have regarding a medical condition. Medkart on any information and subsequent action or inaction is solely at the user's risk, and we do not assume any responsibility for the same. The content on the Platform should not be considered or used as a substitute for professional and qualified medical advice. Please consult your doctor for any query pertaining to medicines, tests and/or diseases, as we support, and do not replace the doctor-patient relationship.
      </p>
      <div className="features-container">
        <div className="feature-item">
          <img src={card} alt="Safe Payment Icon" className="feature-icon" />
          <p className="feature-text">
            <span className="feature-highlight">Safe and Secure</span>
            <br />
            Payment
          </p>
        </div>
        <div className="feature-item">
          <img src={hand} alt="Authentic Products Icon" className="feature-icon" />
          <p className="feature-text">
            <span className="feature-highlight">100% Authentic</span>
            <br />
            Products
          </p>
        </div>
        <div className="feature-item">
          <img src={like} alt="Happy Customers Icon" className="feature-icon" />
          <p className="feature-text">
            <span className="feature-highlight">6 Lac + Happy</span>
            <br />
            Customers
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;