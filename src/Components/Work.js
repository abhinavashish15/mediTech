import React from "react";
import PickDoctor from "../Assets/doctor-image.jpg";
import ChooseDoctor from "../Assets/choose-doctor.jpg";
import BloodDelivery from "../Assets/fast-delivery.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: PickDoctor,
      title: "Pick Doctor",
      text: "Select the right doctor from our platform with ease, based on specialization and patient reviews. Book appointments instantly for a seamless healthcare experience.",
    },
    {
      image: ChooseDoctor,
      title: "Choose How Often",
      text: "you'd like to receive reminders or notifications for your medical needs, whether it's for routine check-ups, prescription refills, or blood donations, and stay on top of your health effortlessly.",
    },
    {
      image: BloodDelivery,
      title: "Fast Blood Delivery",
      text: "Experience rapid blood delivery during emergencies with Meditech, ensuring timely access to life-saving resources through a network of nearby donors and blood banks.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        {/* <p className="primary-subheading">Work</p> */}
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Meditech works by providing users with real-time access to critical healthcare resources, such as blood availability and medical records. Users can check the availability of blood, receive critical alerts for urgent blood needs, and easily manage medical documents through the platform. The system leverages secure cloud storage for document management and ensures data safety through encryption. It also boosts donor engagement by analyzing donor behavior and sending personalized outreach campaigns. Overall, Meditech is scalable and designed to grow, supporting future healthcare needs while protecting sensitive medical information.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;