import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { images } from '../../constants';
import './Skills.scss'


const skill = [
  { name: 'React', imgUrl: images.react, },
  { name: 'Flutter', imgUrl: images.flutter, },
  { name: 'JavaScript', imgUrl: images.javascript, },
  { name: 'HTML', imgUrl: images.html, },
  { name: 'CSS', imgUrl: images.css, },
  { name: 'Firebase', imgUrl: images.firebase, },
 
];
const experience = [
  { name: 'Technical Assistant',company:'Hashint Technologies Pvt.Ltd', description: 'I worked as a technical assistant at Hashit Technologies.',year:'2020'},
  // { name: 'Technical Assistant',company:'Hashint Technologies Pvt.Ltd', description: 'I worked as a technical assistant at Hashit Technologies.',year:'2020'},
  // { name: 'Technical Assistant',company:'Hashint Technologies Pvt.Ltd', description: 'I worked as a technical assistant at Hashit Technologies.',year:'2020'},
  // { name: 'Technical Assistant',company:'Hashint Technologies Pvt.Ltd', description: 'I worked as a technical assistant at Hashit Technologies.',year:'2020'},
];
function Skills() {
  const [experiences, setExperience] = useState([])
  const [skills, setSkills] = useState([])
  useEffect(() => {
    setExperience(experience);
    setSkills(skill);
  }, []);

  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex'>
                <img src={skill.imgUrl} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
            {experiences.map((work)=>(
              <>
              <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-exp-work'
              data-for={work.name}
              key={work.name}
              >
                <div className='app__skills-exp-year'>
                <p className='bold-text'>{work.year}</p>
                </div>
                
                <h4 className='bold-text'>{work.name}</h4>
                <p className='p-text  p-company'>{work.company}</p>
                <p className='p-text'>{work.description}</p>
              </motion.div>
              </>
            ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills , 'app__skills'),
  'skills',
  'app__whitebg'
  )
