import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import NotFound from '../../components/NotFound/NotFound';
import Footer from '../../components/Footer/Footer';

const ErrorNotFound = () => {
    return (
        <div className='bg-black/90'>
            <Navbar></Navbar>
            <NotFound></NotFound>
            <Footer></Footer>
        </div>
    );
};

export default ErrorNotFound;