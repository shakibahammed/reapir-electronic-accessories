import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import AllServices from '../AllServices/AllServices';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
        <Header></Header>
        <AllServices></AllServices>
        <AboutUs></AboutUs>
        <Testimonials></Testimonials>
        <Footer></Footer>
        </div>
    );
};

export default Home;