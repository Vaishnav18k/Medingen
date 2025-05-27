// import React from 'react'
import { Header } from './components/Header';
import { MedicineDetails } from './components/MedicineDetails';
import { CompareMedicines } from './components/CompareMedicines';
import { FAQSection } from './components/FAQSection';
import {ReviewsSection} from './components/ReviewsSection';
import {Footer }from './components/Footer';

function App() {
  return (
   <div className='app'>
    <Header />
    <MedicineDetails />
    <CompareMedicines />
    <FAQSection />
    <ReviewsSection />
    <Footer />
   </div>
  )
}

export default App