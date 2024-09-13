import React from 'react';
import Navbar from './Navbar';
import PromoVideo from "../Assets/home-page-vid.mp4"
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className='home-banner-container'>
        <div className='home-video-container'>
          <video className='promo-video' autoPlay muted controls loop >
            <source src={PromoVideo} type="video/mp4" />
          </video>
        </div>
        <div className='quote-container'>
          <h1 className='quote-text'>
            "Meditech isn’t just about technology—it’s about creating a future where healthcare is accessible, efficient, and secure for everyone"
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
