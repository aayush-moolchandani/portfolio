import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <motion.section id='experience'
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2>Career Journey</h2>
      <motion.div
        className='container experience_container'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } }
        }}
      >
        {[{
          title: 'Senior Software Developer (Team Lead)',
          company: 'The Feast, Malaysia (Hybrid) | Mar 2020 - Present',
          details: [
            'Refactored legacy monolith into modular React + Next.js architecture.',
            'Integrated complex REST and GraphQL APIs with Redux.',
            'Led frontend engineering team, conducted 1-on-1 mentorships.',
            'Implemented CI/CD pipelines and adoption with AWS.',
            'Automated regression testing using Jest and Selenium.',
            'Championed web vitals and Lighthouse score improvements.'
          ]
        }, {
          title: 'Software Developer',
          company: 'Accenture, India (Remote) | Sep 2019 - Mar 2020',
          details: [
            'Developed and integrated scalable REST APIs and dynamic UI components.',
            'Established Github-based CI/CD pipelines for various teams.'
          ]
        }].map((job, i) => (
          <motion.div
            className='experience_job'
            key={job.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{job.title}</h3>
            <small className='text-light'>{job.company}</small>
            <motion.div
              className='experience_content'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.10 } }
              }}
            >
              {job.details.map((desc, j) => (
                <motion.article
                  className='experience_details'
                  key={desc}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: j * 0.05 }}
                  viewport={{ once: true }}
                >
                  <BsPatchCheckFill className='icon' />
                  <div><p>{desc}</p></div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
