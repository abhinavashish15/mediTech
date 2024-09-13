import React from "react";
import ProfilePic from "../Assets/abhinav.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        {/* <p className="primary-subheading">Feedbacks</p> */}
        <h1 className="primary-heading">Customer Feedbacks</h1>
        <p className="primary-text">
          Your feedback is incredibly motivating for us. It confirms that our efforts are making a positive impact and inspires us to continually enhance Meditech. We’re grateful for your support, which drives us to keep improving and innovating for a better healthcare experience.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img className="profile-image"src={ProfilePic} alt="" />
        <p>
          Meditech has truly transformed my healthcare experience. The real-time blood availability feature is incredibly reliable, and the easy access to medical records simplifies my life. I appreciate the prompt alerts for critical needs, ensuring I never miss an urgent update. The user-friendly interface makes managing my health and documents effortless. Overall, Meditech is an essential tool for anyone needing efficient, up-to-date healthcare management.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Abhinav Ashish</h2>
      </div>
    </div>
  );
};

export default Testimonial;
