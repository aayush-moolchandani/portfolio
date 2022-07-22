import React from 'react'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'
import './contact.css'

export default function Contact() {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Details</h2>
      <div className='container contact_container'>
         <article className='contact_option'>
           <MdEmail className='icon'/>
           <h4>Email</h4>
           <h5>aayushFe@gmail.com</h5>
           <a href='mailto:aayushFe@gmail.com' target='_blank'> Send Message</a>
         </article>
         <article className='contact_option'>
           <RiWhatsappFill className='icon'/>
           <h4>Whatsapp</h4>
           <h5>+91-9871467833</h5>
           <a href='https://wa.me/919871467833' target='_blank'> Send Message</a>
         </article>
         <article className='contact_option'>
           <BsLinkedin className='icon'/>
           <h4>Linkedin</h4>
           <h5>Aayush Moolchandani</h5>
           <a href='https://www.linkedin.com/in/aayush-moolchandani-1b926211b/' target='_blank'>Send Message</a>
         </article>
      </div>
    </section>
  )
}
