// MedicineDetails.tsx
import React from 'react';
import './MedicineDetails.css';
import GenericAlternatives from './GenericAlternatives';

interface Product {
  name?: string;
  description?: string;
  uses?: string[];
  howItWorks?: string[];
  sideEffects?: string[];
}

interface Props {
  product: Product;
}

const MedicineDetails: React.FC<Props> = ({ product }) => {
  return (
    <div className="container">
      <div className="left-section">
        <div className="medication-info">
          <p> &lt; Paracetamol/acetaminophen</p>
        </div>
        <div className="Heading">
          <p className="box-text">Medicine Details</p>
        </div>
        <section className="medicine-details">
          <h2>About {product.name || 'this medicine'}</h2>
          <p>{product.description || 'No description available.'}</p>

          <h3>Uses of {product.name || 'the medicine'}</h3>
          <ul>
            {Array.isArray(product.uses) && product.uses.length > 0 ? (
              product.uses.map((use, index) => <li key={index}>{use}</li>)
            ) : (
              <li>No uses found.</li>
            )}
          </ul>

          <h3>How {product.name || 'this medicine'} Works</h3>
          <ul>
            {Array.isArray(product.howItWorks) && product.howItWorks.length > 0 ? (
              product.howItWorks.map((info, index) => <li key={index}>{info}</li>)
            ) : (
              <li>No information available.</li>
            )}
          </ul>

          <h3>Side Effects of {product.name || 'this medicine'}</h3>
          <div className="heading1">
            <p className="box-text1">Common Side Effects of UDILIV 300MG TABLET 15'S</p>
          </div>
          <ul className="ul-list">
            {Array.isArray(product.sideEffects) && product.sideEffects.length > 0 ? (
              product.sideEffects.map((effect, index) => <li key={index}>{effect}</li>)
            ) : (
              <li>No data available</li>
            )}
          </ul>
        </section>
      </div>
      <div className="right-section">
        <GenericAlternatives />
      </div>
    </div>
  );
};

export default MedicineDetails;