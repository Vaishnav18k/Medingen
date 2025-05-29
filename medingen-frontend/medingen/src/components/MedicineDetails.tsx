// MedicineDetails.tsx
import React from 'react';
import './MedicineDetails.css';

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
  return (<>
  <div className='Heading'>
        <p className='box-text'>Medicine Details </p> </div> 
    <section className="medicine-details">
      {/* <div className='Heading'>
        <p className='box-text'>Medicine Details </p> </div>  */}
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
        <p className='box-text1'>Common Side Effects of UDILIV 300MG TABLET 15'S </p> 
      </div>
      
      <ul className='ul-list'>
        {Array.isArray(product.sideEffects) && product.sideEffects.length > 0 ? (
          product.sideEffects.map((effect, index) => <li key={index}>{effect}</li>)
        ) : (
      < >
      <li>Diarrhea.</li>
      <li>Abdominal discomfort.</li>
      <li>Nausea.</li>
      <li>Vomiting.</li>
      <li>Hairloss.</li>
</>
        )}
      </ul>
    </section>
    </>
  );
};

export default MedicineDetails;


































// // MedicineDetails.tsx
// import React from 'react';
// import './MedicineDetails.css';

// interface Product {
//   name: string;
//   description: string;
//   uses: string[];
//   howItWorks: string[];
//   sideEffects: string[];
// }

// interface Props {
//   product: Product;
// }

// const MedicineDetails: React.FC<Props> = ({ product }) => {
//   return (
//     <section className="medicine-details">
//       <h2>About {product.name}</h2>
//       <p>{product.description}</p>

//       <h3>Uses of {product.name}</h3>
//       <ul>
//         {product.uses.map((use, index) => (
//           <li key={index}>{use}</li>
//         ))}
//       </ul>

//       <h3>How {product.name} Works</h3>
//       <ul>
//         {product.howItWorks.map((info, index) => (
//           <li key={index}>{info}</li>
//         ))}
//       </ul>

//       <h3>Side Effects of {product.name}</h3>
//       <p>Common Side Effects:</p>
//       <ul>
//         {product.sideEffects.map((effect, index) => (
//           <li key={index}>{effect}</li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default MedicineDetails;