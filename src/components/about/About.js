import React from "react";
import mine from "../../assets/abt_me.webp";
import { BiAward } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import "./about.css";

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
              <small> 4+ Years Working</small>
            </article>
            <article className='about_card'>
              <AiOutlineProject className='about_icon' />
              <h5>Projects</h5>
              <small> 5+ Projects </small>
            </article>
          </div>
          <p>
            I am a front-end developer with 2 years of experience in React, Angular, JavaScript, HTML, and CSS. I also have a basic knowledge of Next.js. One of my recent accomplishments was
            optimizing the page score to 75 on Google Lighthouse. Additionally, I was responsible for launching our product in Indonesia, where I handled the translation for both React and Angular.
            Recently, I have expanded my skillset to include back-end development using NestJS and have gained a basic understanding of AWS, including load balancers and other services. I am
            passionate about staying up-to-date with the latest technologies and continuously improving my skills to deliver high-quality, user-friendly web applications. I recently gained experinece in nest.js i have made arround 20 apis.
          </p>
          <a href='#contact' className='btn btn_primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
