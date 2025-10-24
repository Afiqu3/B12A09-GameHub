import React, { useContext } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const AboutPage = () => {
     const { loading } = useContext(AuthContext);
    
      if (loading) {
        return <LoadingSpinner></LoadingSpinner>;
      }
    return (
        <div className='bg-linear-to-br from-gray-900 via-black to-gray-900'>
            <title>About</title>
            <Navbar></Navbar>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default AboutPage;