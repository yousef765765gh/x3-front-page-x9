import './AboutCTA.css';

const AboutCTA = ({ imgLogo,mainTitle, subText, welcomeLabel, messageBox, buttonText }) => {
    return (
        <section className="sa-cta-wrapper">
            <div className="sa-cta-container">
                <div className="sa-cta-top-card">
                    <div className="sa-icon-box">
                        <img src={imgLogo} alt="Logo" className="sa-cta-icon" />
                    </div>
                    <div className="sa-cta-text">
                        <h3 className="sa-cta-main-title">{mainTitle}</h3>
                        <p className="sa-cta-sub-text">{subText}</p>
                    </div>
                </div>
                <div className="sa-cta-bottom-bar">
                    <div className="sa-sub-container"> 
                        <span className="sa-welcome-label">{welcomeLabel}</span>
                        <div className="sa-message-box">
                            {messageBox}
                        </div> 
                    </div>
                    <button className="sa-cta-btn">{buttonText}</button>
                </div>
            </div>
        </section>
    );
};

export default AboutCTA;