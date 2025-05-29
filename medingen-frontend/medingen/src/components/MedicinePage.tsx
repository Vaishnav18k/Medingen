// MedicinePage.tsx
import  { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import MedicineDetails from './MedicineDetails';
import CompareMedicines from './CompareMedicines';
import FAQSection from './FAQSection';
import ReviewsSection from './ReviewsSection';
import './MedicinePage.css'
import { ClipLoader } from 'react-spinners';


const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
});

apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['x-access-token'] = token;
  }
  return config;
});

const MedicinePage = () => {
  const [product, setProduct] = useState(null);
  const [medicines, setMedicines] = useState([]);
  const [FAQs, setFAQs] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productRes, medicinesRes, faqRes, reviewRes] = await Promise.all([
          apiClient.get('/products'),
          apiClient.get('/products'),
          apiClient.get('/descriptions'),
          apiClient.get('/reviews')
        ]);


        console.log("Product:", productRes.data[0]);
      console.log("Medicines:", medicinesRes.data.slice(1, 5));

        setProduct(productRes.data[0]);
        setMedicines(medicinesRes.data.slice(1, 5));
        
        setFAQs(faqRes.data.filter((desc: { title: string }) => desc.title === 'FAQ'));
        setReviews(reviewRes.data);

      } catch (err) {
        console.error("Failed to fetch medicines", err);
        // if (axios.isAxiosError(err)) {
        //   console.error("Failed to load data", err.response?.data || err.message);
        // } else if (err instanceof Error) {
        //   console.error("Failed to load data", err.message);
        // } else {
        //   console.error("Failed to load data", err);
        // }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // if (loading) return <div className='load'>Loading...</div>;
    if (loading) return <div className="load"><ClipLoader size={30} /></div>;


 return (
  <div className="app">
    <Header />
    <main>
      {product && (
        <>
          <MedicineDetails product={product} />
          <CompareMedicines medicines={medicines || []} />
          <FAQSection FAQs={FAQs} />
          <ReviewsSection reviews={reviews} />
        </>
      )}
    </main>
    <Footer />
  </div>
);
};

export default MedicinePage;