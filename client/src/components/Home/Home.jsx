import React from 'react'
import FeaturedHostels from './FeatureHostels/FeaturedHostels';
import Reviews from './Reviews/Reviews';
import FindHostel from './FindHostel/FindHostel';
import FindYourHome from './FindYourHome/FindYourHome';

const Home = () => {
  return (
    <div>
        <div>Home</div>
        <FindHostel />
        <FeaturedHostels />
        <Reviews />
        <FindYourHome />
    </div>
  )
}

export default Home