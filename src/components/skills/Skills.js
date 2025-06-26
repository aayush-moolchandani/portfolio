import React from 'react'
import './skills.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import { motion } from 'framer-motion'

const frontend = [
  'JavaScript', 'TypeScript', 'HTML', 'CSS', 'React.js', 'Next.js', 'Angular', 'Redux', 'React Native', 'Webpack', 'Lighthouse', 'Sentry'
]
const backend = [
  'SQL', 'Python', 'NestJS', 'RESTful APIs', 'GraphQL', 'AWS', 'Docker', 'Jenkins', 'Git', 'GitHub', 'Jest', 'Cypress', 'System Design'
]

export default function Skills() {
  return (
    <section id='skills'>
      <h2>My Skills</h2>
      <motion.div
        className='container experience_container'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } }
        }}
      >
        <motion.div
          className='experience_frontend'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            {frontend.map(skill => (
              <motion.article
                className='experience_details'
                key={skill}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <BsFillPatchCheckFill className="experience_details-icon"/>
                <div><h4>{skill}</h4></div>
              </motion.article>
            ))}
          </div>
        </motion.div>
        <motion.div
          className='experience_backend'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3>Backend & Others</h3>
          <div className='experience_content'>
            {backend.map(skill => (
              <motion.article
                className='experience_details'
                key={skill}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <BsFillPatchCheckFill className="experience_details-icon"/>
                <div><h4>{skill}</h4></div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
