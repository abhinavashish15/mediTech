import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">We’re here to help!</h1>
      <h1 className="primary-heading">For any questions or support</h1>
      <h1 className="primary-heading">please contact us at :</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="abhinavashish1503@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
