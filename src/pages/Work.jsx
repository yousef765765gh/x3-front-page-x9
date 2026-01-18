import React from "react";
import "../components/AboutHeroSection/AboutHeroSection"

const Work = () => {
    return (
        <div>
            <AboutHeroSection 
                hasButton={false}             
                imageBackground="/assets/img/about us section Home+hero work.png" 
                titleSection="Our Works"
                contentSection="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
            />

           
        </div>
    );
};

export default Work;