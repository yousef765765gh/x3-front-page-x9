import AboutSquareUp from "../components/AboutSquareUp/AboutSquareUp"
import SectionOurStory from "../components/SectionOurStory/SectionOurStory"
import AboutSquareUpImage from "/assets/img/SquareUpsectionabout.png"
import SquareUpImage from "/assets/img/LogoSq.svg"

const About = () => {

    return (
        <>
        <AboutSquareUp
        title="About SquareUp"
        description="SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
        bgImage={AboutSquareUpImage}
        icon={SquareUpImage}
        />
            <SectionOurStory/>
        </>
    )
}

export default About