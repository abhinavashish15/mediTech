import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const faqs = [
    {
      question: "What services does this medical website offer?",
      answer: "Our website provides a range of services including access to real-time blood availability, medical record management, critical alerts for urgent needs, donor engagement, and general health information."
    },
    {
      question: "How can I check the availability of blood for donation?",
      answer: "You can check the real-time availability of blood by navigating to the Blood Availability section on our homepage. Enter the required details such as blood type and location to view current availability."
    },
    {
      question: "How do I access my medical records?",
      answer: "To access your medical records, you need to create an account on our website. Once logged in, you can view and manage your medical records through the 'My Records' section. Ensure that your records are updated by your healthcare provider."
    },
    {
      question: "How do I set up notifications for critical alerts?",
      answer: "You can set up notifications for critical alerts by going to the 'Alerts' section in your account settings. Choose the types of alerts you wish to receive and select your preferred notification method (e.g., email, SMS)."
    },
    {
      question: "How can I become a donor?",
      answer: "To become a donor, visit the 'Donor Registration' page on our website. Fill out the required information and follow the instructions to complete your registration. You will be contacted for the next steps in the donation process."
    },
    {
      question: "Is my personal information secure on this website?",
      answer: "Yes, we prioritize your privacy and data security. Our website uses encryption and other security measures to protect your personal and medical information. For more details, please review our Privacy Policy."
    },
    {
      question: "How can I contact customer support if I have issues?",
      answer: "If you need assistance, you can contact our customer support team via the 'Contact Us' page. You can reach us through email, phone, or our live chat feature available during business hours."
    },
    {
      question: "Are there any fees for using the services on this website?",
      answer: "Most of our services are offered free of charge. However, some specialized services may incur a fee. Please refer to the specific service pages for detailed information about any potential costs."
    },
    {
      question: "How can I update my personal information or medical records?",
      answer: "To update your personal information or medical records, log in to your account and navigate to the relevant sections. Follow the instructions to make the necessary changes and submit them for review."
    },
    {
      question: "What should I do if I encounter technical issues on the website?",
      answer: "If you experience technical issues, please visit our 'Help Center' for troubleshooting tips. If the problem persists, contact our technical support team through the 'Support' page for further assistance."
    },
  ];

  return (
    <div className='faq-container'>
      <h1 className='faq-heading'>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography><h2>{faq.question}</h2></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQ;
