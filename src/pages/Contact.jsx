import React from "react";

import ContactForm from "../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div>
      <ContactForm
        email="hello@squareup.com"
        phone="+91 91813 23 2309"
        location="Get Location"
        operatingDays="Monday to Friday"
        labelName="Full Name"
        labelEmail="Email Address"
        labelReason="Why are you contacting us?"
        options={["Web Design", "Collaboration", "Mobile App Design", "Others"]}
        labelMessage="Your Message"
        btnSubmit="Submit"
      />
    </div>
  );
};

export default Contact;
