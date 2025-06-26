import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>AAYUSH</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://linkedin.com/in/aayush-moolchandani"><BsLinkedin/></a>
        <a href="https://github.com/aayush-moolchandani"><BsGithub/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Aayush Moolchandani. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer 