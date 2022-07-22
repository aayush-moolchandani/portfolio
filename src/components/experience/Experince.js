import React from "react";
import "./experince.css";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Experince() {
  return (
    <section id='experince'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className='ui'>
          <h3> UI UX</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>Adobe XD</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>ANTD</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className='web development'>
          <h3>Framework and Library</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>React JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>Next JS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>React Server Side Rendering </h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
