import DASlider from '../DASlider/DASlider';
import './DATestimonialsSection.css';
import CardsData from "../../data/TestimonialsCards.js";
import slider from "/assets/img/contact p Home+work +process.png"
import AboutHeroSection from '../about_hero_section/AboutHeroSection.jsx';

const DATestimonialsSection = () => {
    return (
        <>
            <AboutHeroSection
                hasButton={false}
                imageBackground={slider}
                titleSection="What our Clients say About us"
                contetSection="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
            />

            <section className="datestimonials-section">
                <DASlider data={CardsData} />
            </section>
        </>
    );
};

export default DATestimonialsSection;