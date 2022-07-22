import React from "react";
import "./project.css";
import img1 from "../../assets/partnerapp.png";
import img2 from "../../assets/userapp.png";
import img3 from "../../assets/pizza.jpeg";
import img4 from "../../assets/nextjs.png";
import img5 from "../../assets/portfolio1.jpg";

export default function Project() {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className='container project_container'>
        <article className='project_item'>
          <div className='project_item-image'>
            <img src={img1} alt='project' className="img-project"></img>
          </div>
          <h3>Partner App</h3>
          <h4>(easyeat projec ANGULAR)</h4>
          <a href='https://partner-dev.easyeat.ai/' className='btn'>
            Live Demo
          </a>
        </article>
        <article className='project_item'>
          <div className='project_item-image'>
            <img src={img2} alt='project' className="img-project"></img>
          </div>
          <h3>User App</h3>
          <h4>(easyeat projec REACT)</h4>
          <a href='https://tossed.easyeat.ai/' className='btn'>
            Live Demo
          </a>
        </article>
        <article className='project_item'>
          <div className='project_item-image'>
            <img src={img5} alt='project' className="img-project"></img>
          </div>
          <h3>Shannon</h3>
          <h4>(easyeat projec Angular)</h4>
          <a href='https://shannon.easyeat.ai/' className='btn'>
            Live Demo
          </a>
        </article>
        <article className='project_item'>
          <div className='project_item-image'>
            <img src={img3} alt='project' className="img-project"></img>
          </div>
          <h3>Pizza Static website</h3>
          <h4>(personal project REACT)</h4>
          <a href='https://nrc9r.csb.app/' className='btn'>
            Live Demo
          </a>
        </article>
        <article className='project_item'>
          <div className='project_item-image'>
            <img src={img4} alt='project' className="img-project"></img>
          </div>
          <h3>Random Feed</h3>
          <h4>(personal project NEXT)</h4>
          <a href='https://next-js-feed.vercel.app/' className='btn'>
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
}
