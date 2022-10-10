import React from 'react'
import FeaturedHostels from './FeatureHostels/FeaturedHostels';
import Reviews from './Reviews/Reviews';
import FindHostel from './FindHostel/FindHostel';

const Home = () => {
  return (
    <div>
        <div>Home</div>
        <FindHostel />
        <FeaturedHostels />
        <Reviews />
    </div>
  )
}

export default Home