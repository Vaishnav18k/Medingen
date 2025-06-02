// CompareMedicines.tsx
import React from 'react';
import './CompareMedicines.css';
import Rating from '@mui/material/Rating';

interface Medicine {
  id: number;
  name: string;
  manufacturer: string;
  generic_name: string;
  price: number;
  discounted_price?: number;
  image_url: string;
  // ratings: { rating: number }[];
  reviews: { comment: string, rating: number }[];
}

interface Props {
  medicines: Medicine[];
}

const CompareMedicines: React.FC<Props> = ({ medicines }) => {
  if (!medicines || medicines.length === 0) return null;

  return (
    <section className="compare-medicines">
      <div className='cm'>
        <h2>Compare Medicines</h2>
      <p>Compare medicines price composition to make<br>
      </br> your decision</p> </div>
      

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
             <div className='price-box' >
              <div className='price-label' >
                Original Price  <span className='price-value'> Rs.{medicine.discounted_price}</span>
              </div>
                </div>
                   <hr style={{ 
    border: 'none',
    height: '2px',
    backgroundColor: 'rgba(192, 196, 196, 0.3)',
    margin: '20px 3px', 
    width:'245px'
  }} />
    <p className='a6'>Chemical formation: </p>  
    <span className='a7'>CH02 || CH02</span>
    
    <div> <br></br> <span className='a8'>Rating & Review</span>
      </div>
      <div className="ratings">     
  {medicine.reviews && medicine.reviews.length > 0 && medicine.reviews[0].rating ? (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Rating 
        name={`rating-${medicine.id}`}
        value={medicine.reviews[0].rating}
        readOnly
        precision={0.5}
      />
      <p className="r1">{medicine.reviews[0].rating}.0</p>
    </div>
  ) : (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Rating name={`rating-${medicine.id}`} value={0} readOnly />
      <p className="r1">0</p>
    </div>
  )}
</div>
<div>
            {medicine.reviews && medicine.reviews.length > 0 && medicine.reviews[0]?.comment ? (
              <p>"{medicine.reviews[0].comment}"</p>
            ) : (
              <p>"Review not available"</p>
            )}
          </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default CompareMedicines;