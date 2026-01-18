import React from "react";
import "../components/AboutHeroSection/AboutHeroSection"


const Home = () => {
    return (
        <div>
            <AboutHeroSection 
                hasButton={false} 
                imageBackground="/assets/img/about us section Home+hero work.png" 
                titleSection="A Digital Product Studio
                that will Work"
                contentSection="We build digital products that help your business grow and succeed in the digital world."
            />

           
        </div>
    );
};

export default Home;