import TitleAtSquer from '../TitleAtSquer/TitleAtSquer';
import './DAHero.css'
import { Link } from "react-router-dom";

const DAHero = () => {
    return (
        <section className="DAHero-container" >
            <TitleAtSquer
                title="A Digital Product Studio that will Work"
                description=
                <>
                    <>
                        For <span> Startups </span> , <span> Enterprise leaders </span> , <span>Media & Publishers</span> ,
                        <span> Social Good</span>
                    </>
                </>
            />
            <div className="Dabtns">
                <Link to="/work" className='DABtn'>Our Works</Link>
                <Link to="/contact" className='DAGreenBtn'>Contact Us</Link>
            </div>
        </section>
    )
}

export default DAHero