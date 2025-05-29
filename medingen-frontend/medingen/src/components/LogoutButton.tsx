// LogoutButton.tsx
// import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css'
import Button from '@mui/material/Button';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="button"> <Button variant='contained' onClick={handleLogout}>Logout</Button></div>
   
  );
};

export default LogoutButton;