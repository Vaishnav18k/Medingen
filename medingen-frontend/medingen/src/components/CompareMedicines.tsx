// CompareMedicines.tsx
import React from 'react';
import './CompareMedicines.css';

interface Medicine {
  id: number;
  name: string;
  manufacturer: string;
  generic_name: string;
  price: number;
  discounted_price?: number;
  image_url: string;
  rating: number;
  reviews: { comment: string }[];
}

interface Props {
  medicines: Medicine[];
}

const CompareMedicines: React.FC<Props> = ({ medicines }) => {
  if (!medicines || medicines.length === 0) return null;

  return (
    <section className="compare-medicines">
      <h2>Compare Medicines</h2>
      <p>Compare medicines price composition to make<br>
      </br> your decision</p>

      <div className="medicine-cards">
        {medicines.map((medicine) => (
          <div key={medicine.id} className="medicine-card">
            <img 
              src={medicine.image_url?.trim() || "https://via.placeholder.com/150"}  
              alt={medicine.name || "Medicine"}
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/150?text=No+Image";
              }}
            />
            <h3>{medicine.name}</h3>
            <p className='a1'>By {medicine.manufacturer || "Unknown"}</p>
           
            <span className='a2'>Generic Name: </span><p className='a3'>{medicine.generic_name || "Not available"}</p>
            <p className='a4'>Average Price: </p>
            <p className="a5">Rs.{medicine.price.toFixed(2)}</p>
             <div className='price-box'>
              <div className='price-label'>
                Original Price  <span className='price-value'> Rs.{medicine.discounted_price}</span>
              </div>
                </div>

            <p>Chemical formation: CH02 || CH02</p>

            <div className="ratings">
              <span>Rating: {medicine.rating}/5</span>
              <span>Reviews: {medicine.reviews?.length || 0}</span>
            </div>

            {medicine.reviews && medicine.reviews.length > 0 && medicine.reviews[0]?.comment ? (
              <p>"{medicine.reviews[0].comment}"</p>
            ) : (
              <p>"Review not available"</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompareMedicines;