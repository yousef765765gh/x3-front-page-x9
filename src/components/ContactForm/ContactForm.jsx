
import React from "react";
import "./ContactForm.css";
import AboutHeroSection from "../about_hero_section/AboutHeroSection";
import ContactHero from "/assets/img/faq section Home+hero section process+contactusfaq.png"


const ContactForm = ({ 
  email, 
  phone, 
  location, 
  operatingDays, 
  labelName,
  labelEmail,
  labelMessage,
  labelReason,
  options = [], 
  btnSubmit,
}) => {
  return (
        
    <section className="sa-contact-section">
      <div className="sa-contact-container">
      <AboutHeroSection 
                   hasButton={false}             
                  imageBackground={ContactHero}
                  titleSection="Contact Us"
                  contentSection="Get in touch with us today and let us help you with any questions or inquiries you may have."
              />
        <div className="sa-contact-box">
          <div className="sa-contact-content" style={{ paddingBottom: '50px' }}>
            <div className="sa-info-wrapper">
              <div className="sa-info-cards">
                <div className="sa-info-card">
                  <div className="sa-info-icon">
                    <img src="/assets/img/Icon messag footer.svg" alt="Email" />
                  </div>
                  <span className="sa-info-text">{email}</span>
                </div>

                <div className="sa-info-card">
                  <div className="sa-info-icon">
                    <img src="/assets/img/Icon phone footer.svg" alt="phone" />
                  </div>
                  <span className="sa-info-text">{phone}</span>
                </div>

                <div className="sa-info-card">
                  <div className="sa-info-icon">
                    <img src="/assets/img/Icon  loction footer.svg" alt="location" />
                  </div>
                  <span className="sa-info-text">{location}</span>
                </div>
              </div>
            </div>
            </div>

            <div className="sa-divider-horizontal"></div>
            <div className="sa-contact-content" style={{ paddingTop: '50px' }}>
            <form className="sa-contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="sa-form-grid">
                <div className="sa-input-group">
                  <label>{labelName}</label>
                  <input type="text" placeholder="Type here" className="sa-form-input" />
                </div>
                <div className="sa-input-group">
                  <label>{labelEmail}</label>
                  <input type="email" placeholder="Type here" className="sa-form-input" />
                </div>
              </div>
              
              <div className="sa-input-group ">
                <label>{labelReason}</label>
                <div className="sa-options-flex">
                  {options.map((option, index) => (
                    <label key={index} className="sa-radio-label">
                      <input type="checkbox" />
                      <span className="sa-custom-checkbox"></span>
                      {option} 
                    </label>
                  ))}
                </div>
              </div>

              <div className="sa-input-group">
                <label>{labelMessage}</label>
                <div className="sa-textarea-wrapper">
                  <textarea className="sa-form-textarea" placeholder="Type here"></textarea>
                  <span className="sa-line first"></span>
                  <span className="sa-line second"></span>
                </div>
              </div>
              <button type="submit" className="sa-submit-btn">{btnSubmit}</button>
            </form>
            </div>
          

          <div className="sa-divider-horizontal"></div>
          <div className="sa-contact-bottom">
            <div className="sa-contact-left">
              <span className="sa-label-contact">Operating Days</span>
              <span className="sa-value-contact">{operatingDays}</span>
            </div>
            
            <div className="sa-contact-divider"></div>

            <div className="sa-contact-right">
              <span className="sa-label-contact">Stay Connected</span>
              <div className="sa-social-placeholder">
                <img src="/assets/img/Icon facbook footer.svg" alt="facebook" />
                <img src="/assets/img/Icon twiter footer.svg" alt="twitter" />
                <img src="/assets/img/icon linked footer.svg" alt="linkedin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  );
};

export default ContactForm;