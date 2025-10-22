import React from 'react';
import Banner from '../../components/Banner/Banner';
import PopularGames from '../../components/PopularGames/PopularGames';
import Newsletter from '../../components/Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularGames></PopularGames>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;