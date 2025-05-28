// FAQSection.tsx
import React from 'react';
import './FAQSection.css';

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  FAQs: FAQ[];
}

const FAQSection: React.FC<Props> = ({ FAQs }) => {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {FAQs.map(({ question, answer }, index) => (
        <details key={index}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </section>
  );
};

export default FAQSection;