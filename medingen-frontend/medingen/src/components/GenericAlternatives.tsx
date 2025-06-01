// GenericAlternatives.tsx
import React from 'react';
import Button from '@mui/material/Button';
import './GenericAlternatives.css';

interface GenericAlternative {
  name: string;
  company: string;
  price: string;
  discount: string;
  imageUrl: string; // Add image URL to the interface
}

const genericAlternatives: GenericAlternative[] = [
  {
    name: 'DOLOWIN PLUS TAB',
    company: 'Micro Labs Limited',
    price: 'Rs.34',
    discount: '75% less Price',
    imageUrl: 'https://www.netmeds.com/images/product-v1/600x600/412620/udiliv_300mg_tablet_15s_3_0.jpg',
  },
  {
    name: 'DOLOWIN PLUS TAB',
    company: 'Micro Labs Limited',
    price: 'Rs.34',
    discount: '75% less Price',
    imageUrl: 'https://www.netmeds.com/images/product-v1/600x600/412620/udiliv_300mg_tablet_15s_3_0.jpg',
  },
  {
    name: 'DOLOWIN PLUS TAB',
    company: 'Micro Labs Limited',
    price: 'Rs.34',
    discount: '75% less Price',
    imageUrl: 'https://www.netmeds.com/images/product-v1/600x600/412620/udiliv_300mg_tablet_15s_3_0.jpg',
  },
  {
    name: 'DOLOWIN PLUS TAB',
    company: 'Micro Labs Limited',
    price: 'Rs.34',
    discount: '75% less Price',
    imageUrl: 'https://www.netmeds.com/images/product-v1/600x600/412620/udiliv_300mg_tablet_15s_3_0.jpg',
  },
  {
    name: 'DOLOWIN PLUS TAB',
    company: 'Micro Labs Limited',
    price: 'Rs.34',
    discount: '75% less Price',
    imageUrl: 'https://www.netmeds.com/images/product-v1/600x600/412620/udiliv_300mg_tablet_15s_3_0.jpg',
  },
];

const GenericAlternatives: React.FC = () => {
  return (
    <div className="generic-alternatives">
      <h3>Generic Medicine Alternative</h3>
      {genericAlternatives.map((alternative, index) => (
        <div key={index} className="alternative-card">
          <img
            src={alternative.imageUrl}
            alt={alternative.name}
            className="medicine-image"
          />
          <div className="alternative-info">
            <p className="alternative-name">{alternative.name}</p>
            <p className="alternative-company">{alternative.company}</p>
            <p className="alternative-details">Paracetamol 650</p>
           <p className="alternative-price">
  
  <span className="strikethrough-price">Rs40</span>{' '}
  {alternative.price}{' '}
  <span className="discount">{alternative.discount}</span>
</p>
          </div>
       <Button
  variant="contained"
  className="add-button"
  sx={{ backgroundColor: '#ffffff', '&:hover': { backgroundColor: '#f5f5f5' } }}
>
  <p className="text">+Add</p>
</Button>
        </div>
      ))}
    </div>
  );
};

export default GenericAlternatives;