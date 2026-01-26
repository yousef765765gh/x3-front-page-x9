import sqicon from "/assets/img/LogoSq.svg"
import workpic from "/assets/img/about us section Home+hero work.png"
import WorksSection from "../components/WorksSection/WorksSection"
import AboutHeroSection from "../components/about_hero_section/AboutHeroSection"

const Work = () => {
    return (
        <>
            <WorksSection />
            <AboutHeroSection
                hasButton={true}
                imageBackground={workpic}
                imageIcone={sqicon}
                titleSection="Our Works"
                contentSection="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
                buttonText="Start Project"
            />
        </>
    )
}

export default Work