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
              <small> 15+ Projects </small>
            </article>
          </div>
          <p>
          Results-driven Technical Lead and Senior Full Stack Developer with 4+ years of experience in software development, specializing in frontend optimization, scalable solutions, and cloud-based architecture. Proficient in backend technologies with a strong focus on microfrontend architecture, AWS, and delivering high-performance user interfaces. Adept at managing teams, fostering skill development, and driving innovation through proof of concepts (POCs).
          </p>
          <a href='#contact' className='btn btn_primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
