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
// import { Medicine } from './types';



 interface Medicine {
  id: number;
  name: string;
  manufacturer: string;
  generic_name: string;
  price: number;
  discounted_price: number;
  image_url: string;
  // rating: number; // add this extra
  reviews: { comment: string, rating: number }[];
}

interface Description {
  id: number;
  title: string;
  content: string;
  product_id: number;
}



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
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [descriptions, setDescriptions] = useState<Description[]>([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchData = async () => {
    try {
      const [productRes, medicinesRes, descriptionsRes, reviewRes] = await Promise.all([
        apiClient.get('/products'),
        apiClient.get('/products'),
        apiClient.get('/descriptions'),
        apiClient.get('/reviews')
      ]);

      // Set main product
      setProduct(productRes.data[0]);
      setMedicines(medicinesRes.data.slice(0, 5));
      // Clone the same product 4 times
      // const baseProduct = medicinesRes.data[0];
      // if (baseProduct) {
      //   const duplicateProducts = Array.from({ length: 4 }, (_, i) => ({
      //     ...baseProduct,
      //     id: baseProduct.id + i + 1,
      //     name: `${baseProduct.name} `, 
      //     // - ${i + 2} before
      //     price: Number((baseProduct.price * (1 + i * 0.1)).toFixed(2)),
      //     rating: Math.min(5, baseProduct.rating + i * 0.2),
      //     reviews: [{
      //       comment: `Good alternative for pain - Version ${i + 2}`
      //     }]
      //   }));
      //   setMedicines(duplicateProducts);
      // }
      setDescriptions(descriptionsRes.data.filter((desc: Description) => desc.product_id === 1));
      // setFAQs(faqRes.data.filter((desc: { title: string }) => desc.title === 'FAQ'));
      setReviews(reviewRes.data);

    } catch (err) {
      console.error("Failed to fetch data", err);
      // setError("Could not load medicine details.");
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
          <FAQSection descriptions={descriptions} />
          <ReviewsSection reviews={reviews} />
        </>
      )}
    </main>
    <Footer />
  </div>
);
};

export default MedicinePage;