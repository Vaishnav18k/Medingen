
import React, { useState } from 'react';
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
  // State to manage FAQ section expansion
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter descriptions for a specific product_id (e.g., 1 for Paracetamol)
  const productDescriptions = descriptions.filter(description => description.product_id === 1);

  // Toggle expansion state
  const toggleFAQ = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="faq-container">
      <div className="faq-section">
        <h2>
          Frequently Asked Questions for Paracetamol
          <span
            className={`faq-icon ${isExpanded ? 'expanded' : ''}`}
            onClick={toggleFAQ}
            role="button"
            aria-expanded={isExpanded}
            aria-label="Toggle FAQ section"
          >
            ▼
          </span>
        </h2>
      </div>
      
      <div className={`faq-section-1 ${isExpanded ? 'visible' : 'hidden'}`}>
        <h3>Paracetamol</h3>
        {productDescriptions.length > 0 ? (
          productDescriptions.map(({ title, content }, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question">Q. {title}</div>
              <div className="faq-answer">{content}</div>
            </div>
          ))
        ) : (
          <div className="no-faqs">No FAQs available for this product.</div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
