import React from "react";
import mine from "../../assets/abt_me.webp";
import {BiAward} from "react-icons/bi";
import {AiOutlineProject} from "react-icons/ai";
import './about.css'

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-img'>
            <img src={mine} alt='me' />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <BiAward className='about_icon' />
              <h5>Experience</h5>
              <small> 2+ Years Working</small>
            </article>
            <article className='about_card'>
              <AiOutlineProject className='about_icon' />
              <h5>Projects</h5>
              <small> 5+ Projects </small>
            </article>
          </div>
          <p>
            I am a front-end developer. I have 2 years of experience in React, Angular, Javascript, HTML, CSS and have a basic knowledge of Next. JS My current accomplishments include optimising my
            page score to 75 (Google Lighthouse) and launching our product in Indonesia, where I dealt with translation for both react and angular.
          </p>
          <a href='#contact' className='btn btn_primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
