import './SectionOurStory.css'
import TitleAtSquer from '../TitleAtSquer/TitleAtSquer'
import Aboutdata from '../../data/Aboutdata.json';
import ProcessCard from '../ProcessCard/ProcessCard';
const SectionOurStory = () => {
  return (
    <section className="our-story">
        <TitleAtSquer
        title="Our Story"
        className='ourstory-title'
        />
          <div className="our-story-card">
        {
          Aboutdata.map((item, index) => (
            <ProcessCard
              key={index}
              number={item.number}
              title={item.title}
              description={item.description}
              titleColor= "var(--whit-green-text-color)"
            />
          ))
        }
      </div>
    </section>
  )
}

export default SectionOurStory
