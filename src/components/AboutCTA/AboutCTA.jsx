import React from "react";
import './AboutCTA.css';

const AboutCTA = () => {
    return(
        <section className="sa-cta-wrapper">
            <div className="sa-cta-container">
                <div className="sa-cta-top-card">
                    <div className="sa-icon-box">
                        <img src="/assets/img/Logo.png" alt="Cube" className="sa-cta-icon" />
                    </div>
                    <div className="sa-cta-text">
                        <h3 className="sa-cta-main-title">Today, SquareUp Continues to Thrive as a Leading Digital Product Agency..... </h3>
                        <p className="sa-cta-sub-text">Combining the power of design, engineering, and project management to create transformative digital experiences.
                         They invite you to join them on their journey and discover how they can help bring your digital ideas to life.</p>
                    </div>
                </div>
                <div className="sa-cta-bottom-bar">
                <span className="sa-welcome-label">Welcome to SquareUp</span>
                    <div className="sa-message-box">
                       
                         Where collaboration, Expertise, and Client-Centricity 
                        Intersect to Shape the Future of Digital Innovation.
                    </div> 
                    <button className="sa-cta-btn">Start Project</button>
                </div>
            </div>
        </section>

    );
};
export default AboutCTA;