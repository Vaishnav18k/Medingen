import React from 'react';
import './FAQSection.css';


// Define the Description interface
interface Description {
  id: number;
  title: string;
  content: string;
  product_id: number;
}

// Define the Props interface
interface Props {
  descriptions: Description[];
}

const FAQSection: React.FC<Props> = ({ descriptions }) => {
  // Filter descriptions for a specific product_id (e.g., 1 for Paracetamol)
  const productDescriptions = descriptions.filter(description => description.product_id === 1);

  return (
    <section className="faq-container">
      <div className="faq-section">
        <h2>
          Frequently Asked Questions for Paracetamol
          <span className="faq-icon"></span>
        </h2>
       
      </div>
       <br></br>
      <div className="faq-section-1">
        {productDescriptions.length > 0 ? (
          productDescriptions.map(({ title, content }, index) => (
            <div key={index} className="faq-item">
              <p className="faq-question">
                <span className="faq-prefix">Q.</span> {title}
               <p className="faq-answer"> {content}</p>
              </p>
              
            </div>
          ))
        ) : (
          <p>No FAQs available for this product.</p>
        )}
      </div>
    </section>
  );
};

export default FAQSection;