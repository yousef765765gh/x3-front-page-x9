import AboutSquareUp from "../components/AboutSquareUp/AboutSquareUp"
import SectionOurStory from "../components/SectionOurStory/SectionOurStory"
import AboutSquareUpImage from "/assets/img/SquareUpsectionabout.png"
import SquareUpImage from "/assets/img/LogoSq.svg"
import TodaySquareUp from "../components/TodaySquareUp/TodaySquareUp"

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
            <TodaySquareUp
            icon="/assets/img/Logo.png"
            title="Today, SquareUp Continues to Thrive as a Leading Digital Product Agency....."
            description="Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life."
            title2="Welcome to SquareUp"
            description2="Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation."
            button="Start Project"
            />
        </>
    )
}

export default About