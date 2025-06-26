import React from "react";
import mine from "../../assets/abt_me.webp";
import { motion } from 'framer-motion';
import "./about.css";

export default function About() {
  return (
    <section id='about'>
      <div className='container about_container'>
        <motion.div
          className='about_me'
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className='about_me-img'>
            <img src={mine} alt='me' loading="lazy" />
          </div>
        </motion.div>
        <motion.div
          className='about_content'
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 style={{color:'#222', fontWeight:600, fontSize:'2.2rem', marginBottom:'1.2rem'}}>About Me</h2>
          <p>
            Senior Software Developer with 5+ years of experience designing and developing web and mobile applications using React, Next.js, Angular, React Native, and NestJS. Adept in building modular architectures, optimizing performance, and implementing CI/CD pipelines. Proven track record in leading frontend teams, delivering production-grade applications, and aligning engineering goals with business KPIs. Strong focus on clean code, reusability, and modern web standards.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </motion.div>
      </div>
    </section>
  );
}
