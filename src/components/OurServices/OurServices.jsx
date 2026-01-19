import AboutHeroSection from "../about_hero_section/AboutHeroSection"
import OurServicesAndChoosesq from "./OurServicesAndChoosesq"
import defaultServices from "/src/data/defaultServices.json"
import OurServer from "/assets/img/services p Home + hero p about.png";

const OurServices = () => {
  return (
    <>
        <section className="shareServicesAndChooseSq">
                    <AboutHeroSection
                        hasButton={false}
                        imageBackground={OurServer}
                        titleSection="Our Services"
                        contentSection="Transform your brand with our innovative digital solutions that captivate and engage your audience."/>
                    <div className="yb-our-services">
                        {defaultServices.map((item) => (
                            <OurServicesAndChoosesq
                                key={item.id}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                horizontal={false}
                                showButton={item.showButton}
                            />
                            ))}
                    </div>
                </section>
    </>
  )
}

export default OurServices
