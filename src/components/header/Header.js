import React from 'react'
import resume from '../../assets/resume.pdf'
import mine from '../../assets/mine.png'
import {BsLinkedin , BsGithub , BsInstagram} from 'react-icons/bs'
import './header.css'
export default function Header() {
  return (
    <header className='header'>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h2>Aayush Moolchandani</h2>
         <h5 className='text-light'>Full Stack Developer</h5>
         <div className='cta'>
           <a href={resume} download className='btn'>Download CV </a>
           <a href='#contact' className='btn btn-primary'>Lets Talk </a>
         </div>

         <div className='headers__socials'>
         <a href='https://www.linkedin.com/in/aayush-moolchandani-1b926211b/' target="_blank" >
           <BsLinkedin />
         </a>
         <a href='https://github.com/aayush-moolchandani' target="_blank" >
           <BsGithub />
         </a>
         <a href='https://instagram.com/aayumoolchandani?igshid=YmMyMTA2M2Y=' target="_blank" >
           <BsInstagram />
         </a>
         </div>


         <div className='me'>
          <img src={mine} alt="my photo" ></img>
         </div>


      </div>
    </header>
  )
}
