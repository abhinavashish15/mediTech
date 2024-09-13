import React from 'react'
import AboutBackground from "../Assets/about-left.jpg"
import AboutBackgroundImage from "../Assets/about-background-image.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img className="about-image1" src={AboutBackground} alt="" />
        </div>
        <div className='about-section-image-container'>
            <img className="about-image2" src={AboutBackgroundImage} alt="" />
        </div>
        <div className='about-section-text-container' >
            {/* <p className='primary-subheading'>About</p> */}
            <h1 className='primary-subheading'>
                MEDITECH
            </h1>
            <p className='primary-text'>
                Meditech is a groundbreaking platform designed to enhance healthcare management. It provides real-time updates on blood availability and medical records, sends urgent alerts for critical needs, and simplifies the handling of medical documents. By boosting donor engagement and ensuring data security, Meditech not only streamlines healthcare processes but also supports future growth, making it a vital tool in modern healthcare.
            </p>
           
            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'>
                    {""}
                    {/* <BsFillPlayCircleFill /> watch video */}
                </button>
            </div>
        </div>
      
    </div>
  )
}

export default About
