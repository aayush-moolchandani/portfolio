import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import './contact.css'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.section id='contact'
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2>Contact Me</h2>
      <motion.div
        className="container contact_container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        <motion.div className="contact_options">
          {[{
            icon: <MdOutlineEmail className='contact_option-icon' />, title: 'Email', value: 'aayushfe@gmail.com', link: 'mailto:aayushfe@gmail.com', linkText: 'Send a message'
          }, {
            icon: <BsWhatsapp className='contact_option-icon' />, title: 'WhatsApp', value: '+91-9871467833', link: 'https://api.whatsapp.com/send?phone=919871467833', linkText: 'Send a message'
          }].map((opt, i) => (
            <motion.article
              className="contact_option"
              key={opt.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {opt.icon}
              <h4>{opt.title}</h4>
              <h5>{opt.value}</h5>
              <a href={opt.link} target='_blank' rel='noopener noreferrer'>{opt.linkText}</a>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
