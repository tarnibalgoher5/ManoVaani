import React from 'react';
import './Journal.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Journal(){
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
     
    <div>
        <h2>Journal  </h2>
    </div>
      <Footer />
    </>
  );
}

export default Journal;
