import React from 'react';
import Banner from '../Banner/Banner';
import ContractFrom from '../ContractFrom/ContractFrom';
import Info from '../Info/Info';
import PostCarousel from '../PostCarousel/PostCarousel';
import Volunter from '../Volunter/Volunter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <PostCarousel></PostCarousel>
            <Volunter></Volunter>
            <ContractFrom></ContractFrom>
        </div>
    );
};

export default Home;