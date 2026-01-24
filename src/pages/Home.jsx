import OurServices from "../components/OurServices/OurServices"
import WhyChooseSq from "../components/OurServices/WhyChooseSq"
// import DATestimonialsSection from "../components/DATestimonialsSection/DATestimonialsSection"
import DAHero from "../components/DAHero/DAHero"
import DATrusted from "../components/DATrustedLogos/DATrustedLogos"


const Home = () => {
    return (
        <>
            <DAHero
                image="/assets/img/heroSection p Home.png"
                title="A Digital Product Studio that will Work"
                btn1="Our Work"
                btn2="Contact Us"
                description={
                    <>
                        For <span>Startups</span> , <span>Enterprise leaders</span> ,
                        <span>Media & Publishers</span> and <span>Social Good</span>
                    </>
                }
            />
            <DATrusted />
            <OurServices />
            <WhyChooseSq />
        </>
    )
}

export default Home