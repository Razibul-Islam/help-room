import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import PostCarousel from '../PostCarousel/PostCarousel';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <PostCarousel></PostCarousel>
        </div>
    );
};

export default Home;