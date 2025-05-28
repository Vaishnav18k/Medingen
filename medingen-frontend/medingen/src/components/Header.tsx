import './Header.css';
import logo from '../assets/logo-pica.png';
import img1 from '../assets/discount-removebg-preview.png';
import img2 from '../assets/notifi-removebg-preview.png';
import img3 from '../assets/profile-removebg-preview.png';
import img4 from '../assets/shopping-cart.png'
import { RiHome6Fill } from "react-icons/ri";
import LogoutButton from './LogoutButton';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="medingen" style={{ width: '80px', height: '60px' }} />
        <span className="brand-text">Medingen</span>
      </div>
      <nav className="nav-row">
        <div className="nav-item active">
           <RiHome6Fill className="nav-icon" />
          <span className="nav-text">Home</span>
         
        </div>
        <div className="nav-item">
            <img src={img1} className="nav-icon" alt="Offers" />
          <span className="nav-text">Offers</span>
        
        </div>
        <div className="nav-item">
          <img src={img2} className="nav-icon" alt="Notifications" />
        </div>
          <span className="nav-text">Notifications</span>
          
        <div className="nav-item">
            <img src={img3} className="nav-icon" alt="Profile" />
          <span className="nav-text">Profile</span>
        
        </div>
      </nav>
      <div className="cart-icon-wrapper">
          <img src={img4} className="nav-icon" alt="Profile" />
      </div>
       <LogoutButton />
    </header>
  );
};

export default Header;
