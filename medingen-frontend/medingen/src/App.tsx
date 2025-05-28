// App.jsx
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import Header from './components/Header';
// import MedicineDetails from './components/MedicineDetails';
// import CompareMedicines from './components/CompareMedicines';
// import FAQSection from './components/FAQSection';
// import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';

function App() {
  // const [product, setProduct] = useState(null);
  // const [medicines, setMedicines] = useState([]);
  // const [FAQs, setFAQs] = useState([]);
  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   // Fetch product details
  //   axios.get('/products').then((response) => {
  //     setProduct(response.data[0]); // Assuming first product
  //   });

    // Fetch similar medicines
  //   axios.get('/products').then((response) => {
  //     setMedicines(response.data.slice(1, 5)); // Assuming next 4 products
  //   });

  //   // Fetch FAQs
  //   axios.get('/descriptions').then((response) => {
  //     setFAQs(response.data.filter((desc: { title: string; }) => desc.title === 'FAQ'));
  //   });

  //   // Fetch reviews
  //   axios.get('/reviews').then((response) => {
  //     setReviews(response.data);
  //   });
  // }, []);

  return (
    <div className="app">
      <Header />
      {/* <main>
        {product && (
          <>
            <MedicineDetails product={product} />
            <CompareMedicines medicines={medicines} />
            <FAQSection FAQs={FAQs} />
            <ReviewsSection reviews={reviews} />
          </>
        )}
      </main> */}
      <Footer />
    </div>
  );
}

export default App;