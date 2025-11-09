import React from 'react';
import Banner from '../../components/Banner/Banner';
import PopularGames from '../../components/PopularGames/PopularGames';
import Newsletter from '../../components/Newsletter/Newsletter';
import AllGames from '../../components/AllGames/AllGames';
import FAQ from '../../components/FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularGames></PopularGames>
            <AllGames></AllGames>
            <FAQ></FAQ>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;