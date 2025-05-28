// CompareMedicines.tsx
import React from 'react';
import './CompareMedicines.css';

interface Medicine {
  image_url: string;
  name: string;
  manufacturer: string;
  generic_name: string;
  price: number;
  rating: number;
  reviews: { comment: string }[];
}

interface Props {
  medicines: Medicine[];
}

export const CompareMedicines: React.FC<Props> = ({ medicines }) => {
  return (
    <section className="compare-medicines">
      <h2>Compare Medicines</h2>
      <p>Compare medicines price composition to make your decision</p>
      <div className="medicine-cards">
        {medicines.map((medicine, index) => (
          <div key={index} className="medicine-card">
            <img src={medicine.image_url} alt={medicine.name} />
            <h3>{medicine.name}</h3>
            <p>By {medicine.manufacturer}</p>
            <p>Generic Name: {medicine.generic_name}</p>
            <p>Average Price: Rs. {medicine.price}</p>
            <p>Chemical formation: CH02 || CH02</p>
            <div className="ratings">
              <span>Rating: {medicine.rating}</span>
              <span>Reviews: {medicine.reviews.length}</span>
            </div>
            <p>"{medicine.reviews[0]?.comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompareMedicines;