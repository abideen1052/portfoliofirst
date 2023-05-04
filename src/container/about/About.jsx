import React  from 'react'
import {motion} from 'framer-motion'
import { AppWrap, MotionWrap} from '../../wrapper';
import { images } from '../../constants';
import './About.scss'


const about = [
  {title:'Web Development',description:'Crafting innovative web experiences with precision and creativity to bring your ideas to life.', imgUrl: images.about_web},
  {title:'Mobile Development',description:'Crafting mobile apps that engage and enhance user experiences, bringing your vision to millions.', imgUrl:images.about_mob},
  {title:'UI/UX',description:'Designing delightful interfaces that balance aesthetics and usability for seamless digital experiences.', imgUrl:images.about_ui},
  {title:'Backend Development',description:'Reliable backend development for optimal performance, scalability, and security, transforming user experiences.', imgUrl:images.about_backend},
];

function About() {
  return (
    <>
    <h2 className='head-text'>I know that <span>Good Development</span><br/>means <span>Good Business</span></h2>
    <div className='app__profiles'>
      {about.map((about, index)=>(
        <motion.div
          whileInView={{opacity:1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5,type:'tween'}}
          className='app__profile-item'>
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop:10}}>{about.description}</p>
          </motion.div>
))}
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About , 'app__about'),
  'about',
  'app__whitebg'
  )