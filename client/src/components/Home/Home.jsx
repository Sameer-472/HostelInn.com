import React from 'react'
import FeaturedHostels from './FeatureHostels/FeaturedHostels';
import Reviews from './Reviews/Reviews';
import FindHostel from './FindHostel/FindHostel';
import FindYourHome from './FindYourHome/FindYourHome';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <div>
        <div>Home</div>
        <FindHostel />
        <FeaturedHostels />
        <Reviews />
        <FindYourHome />
        <Footer />
    </div>
  )
}

export default Home