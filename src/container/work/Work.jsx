import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { images } from '../../constants';
import './Work.scss'


const work = [
  { title: 'Web Development', description: 'Crafting innovative web experiences with precision and creativity to bring your ideas to life.', imgUrl: images.about_web, projectLink: 'https://github.com/abideen1052', tags: ['UI/UX', 'All'] },
  { title: 'Mobile Development', description: 'Crafting mobile apps that engage and enhance user experiences, bringing your vision to millions.', imgUrl: images.about_mob, projectLink: 'https://github.com/abideen1052', tags: ['Mobile App', 'All'] },
  { title: 'UI/UX', description: 'Designing delightful interfaces that balance aesthetics and usability for seamless digital experiences.', imgUrl: images.about_ui, projectLink: 'https://github.com/abideen1052', tags: ['Web App', 'All'] },
 // { title: 'Backend Development', description: 'Reliable backend development for optimal performance, scalability, and security, transforming user experiences.', imgUrl: images.about_backend, projectLink: 'https://github.com/', tags: ['UI/UX', 'All'] },
];

function Work() {
  const [works, setWorks] = useState([])
  const [filterWork, setFilterWork] = useState([])
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })


  useEffect(() => {
    setWorks(work);
    setFilterWork(work);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(work);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500);
  }
  return (
    <>
      <h2 className='head-text'>My Creative <span>Portfolio </span>Section</h2>
      <div className='app__work-filter'>
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}>
            {item}
          </div>
        ))}
      </div>
      <motion.div className='app__work-portfolio'
        animate={animateCard}
        transition={{ duration: 0.5, delayChildern: 0.5 }}

      >
        {filterWork.map((work, index) => (
          <div className='app__work-item app__flex'>
            <div className='app__work-img app__flex'>
              <img src={work.imgUrl} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className='app__work-hover app__flex'>
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>{work.description}</p>
              <div className='app__work-tag app__flex'>
                <p className='p-text'>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work , 'app__works'),
  'work',
  'app__primarybg'
  )