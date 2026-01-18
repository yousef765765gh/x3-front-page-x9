import React, { useState } from "react";
import "./ContactForm.css";
import AboutHeroSection from "../about_hero_section/AboutHeroSection";
import ContactHero from "/assets/img/faq section Home+hero section process+contactusfaq.png"

const ContactForm = () => {
  return (
    <div>
       <AboutHeroSection 
                hasButton={false}             
                imageBackground={ContactHero}
                titleSection="Contact Us"
                contentSection="Get in touch with us today and let us help you with any questions or inquiries you may have."
            />
    
    
    <section className="sa-contact-section">
      
    <div className="sa-contact-container">
  
      <div className="sa-contact-box">
  
        <div className="sa-contact-content">
  
          <div className="sa-info-wrapper">
            <div className="sa-info-cards">
              <div className="sa-info-card">
                <div className="sa-info-icon">
                  <img src="/assets/img/Icon messag footer.svg" alt="Email" />
                </div>
                <span className="sa-info-text">hello@squareup.com</span>
              </div>
  
              <div className="sa-info-card">
                <div className="sa-info-icon">
                  <img src="/assets/img/Icon phone footer.svg" alt="phone" />
                </div>
                <span className="sa-info-text">+91 91813 23 2309</span>
              </div>
  
              <div className="sa-info-card">
                <div className="sa-info-icon">
                  <img src="/assets/img/Icon  loction footer.svg" alt="location" />
                </div>
                <span className="sa-info-text">Get Location</span>
              </div>
            </div>
          </div>
  
          <div className="sa-divider-horizontal"></div>

        <form className="sa-contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="sa-form-grid">
            <div className="sa-input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Type here"
                className="sa-form-input"
              />
            </div>
            <div className="sa-input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                className="sa-form-input"
              />
            </div>
          </div>
          <div className="sa-input-group sa-full-width">
            <label>Why are you contacting us?</label>
            <div className="sa-options-flex">
              <label className="sa-radio-label">
                <input type="checkbox" />
                <span className="sa-custom-checkbox"></span>
                Web Design
              </label>
              <label className="sa-radio-label">
                <input type="checkbox" />
                <span className="sa-custom-checkbox"></span>
                Collaboration
              </label>
              <label className="sa-radio-label">
                <input type="checkbox" />
                <span className="sa-custom-checkbox"></span>
                Mobile App Design
              </label>
              <label className="sa-radio-label">
                <input type="checkbox" />
                <span className="sa-custom-checkbox"></span>
                others
              </label>
            </div>
          </div>
          <div className="sa-input-group sa-full-width">
            <label>Your Message</label>
            <div className="sa-textarea-wrapper">
              <textarea
                className="sa-form-textarea"
                placeholder="Type here"
              ></textarea>
              <span className="sa-line first"></span>
              <span className="sa-line second"></span>
            </div>
          </div>

         
          <button type="submit" className="sa-submit-btn">Submit</button>

        </form>

      </div>

      <div className="sa-divider-horizontal"></div>

      <div className="sa-contact-bottom">
        <div className="sa-contact-left">
          <span className="sa-label-contact">Operating Days</span>
          <span className="sa-value-contact">Monday to Friday</span>
        </div>

        <div className="sa-contact-divider"></div>

        <div className="sa-contact-right">
          <span className="sa-label-contact">Stay Connected</span>
          <div className="sa-social-placeholder">
            <img src="/assets/img/Icon facbook footer.svg" />
            <img src="/assets/img/Icon twiter footer.svg" />
            <img src="/assets/img/icon linked footer.svg" />
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
</div>
  );
};
export default ContactForm;
