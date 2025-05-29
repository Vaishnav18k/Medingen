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
      <p>Compare medicines price composition to make your decision</p>

      <div className="medicine-cards">
        {medicines.map((medicine) => (
          <div key={medicine.id} className="medicine-card">
            <img 
  src={medicine.image_url || "https://via.placeholder.com/150 "} 
  alt={medicine.name} 
/>
            <h3>{medicine.name}</h3>
            <p>By {medicine.manufacturer}</p>
            <p>Generic Name: {medicine.generic_name}</p>
            <p>Average Price: ₹{medicine.price.toFixed(2)}</p>
            <p>Chemical formation: CH02 || CH02</p>

            <div className="ratings">
              <span>Rating: {medicine.rating}/5</span>
              <span>Reviews: {medicine.reviews?.length || 0}</span>
            </div>

            {medicine.reviews?.[0]?.comment && (
              <p>"{medicine.reviews[0].comment}"</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompareMedicines;