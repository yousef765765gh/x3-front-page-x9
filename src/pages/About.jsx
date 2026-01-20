import AboutCTA from "../components/AboutCTA/AboutCTA";
import imgLogo from "/assets/img/Logo.png";

const About = () => {
    return (
        <div>
            <AboutCTA 
                imgLogo={imgLogo}
                mainTitle="Today, SquareUp Continues to Thrive as a Leading Digital Product Agency....."
                subText="Combining the power of design, engineering, and project management to create transformative digital experiences.
                They invite you to join them on their journey and discover how they can help bring your digital ideas to life."
                welcomeLabel="Welcome to SquareUp"
                messageBox="Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation."
                buttonText="Start Project"
            />
        </div>
    );
};

export default About;