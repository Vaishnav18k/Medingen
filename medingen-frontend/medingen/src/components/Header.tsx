import './Header.css';
import logo from '../assets/logo-pica.png';
import img from '../assets/discount.png';
import { FaShoppingCart } from 'react-icons/fa';
import { RiHome6Fill } from "react-icons/ri";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} style={{ width: '70px', height: '50px' }} alt="medingen" />
        <h1 style={{ fontSize: '1.5em', fontWeight: 'normal', color: '#333' }}>Medingen</h1>
      </div>
      
     <nav className="nav-row">
  <div className="nav-item active">
    <RiHome6Fill className="nav-icon" />
    <span className="nav-text">Home</span>
  </div>
  <div className="nav-item">
    <img src={img} className="nav-icon" alt="Offers" />
    <span className="nav-text">Offers</span>
  </div>
  <div className="nav-item">
    <span className="nav-text">Notifications</span>
  </div>
  <div className="nav-item">
    <span className="nav-text">Profile</span>
  </div>
  <div className="nav-slider"></div>
</nav>
      
      <div className="cart-icon">
        <FaShoppingCart />
      </div>
    </header>
  );
};

export default Header;