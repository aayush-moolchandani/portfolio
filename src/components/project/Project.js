import React from "react";
import { motion } from 'framer-motion';
import "./project.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/partnerapp.png";
import img3 from "../../assets/userapp.png";
import img4 from "../../assets/pizza.jpeg";
import img5 from "../../assets/nextjs.png";

const projects = [
  {
    img: img1,
    title: 'Portfolio Website',
    desc: 'Personal portfolio built using Next.js and Tailwind CSS.',
    btn: { text: 'Live Demo', href: '#' }
  },
  {
    img: img2,
    title: 'Partner App',
    desc: 'Partner dashboard for EasyEat (Angular).',
    btn: { text: 'Live Demo', href: 'https://partner-dev.easyeat.ai/' }
  },
  {
    img: img3,
    title: 'User App',
    desc: 'User-facing app for EasyEat (React).',
    btn: { text: 'Live Demo', href: 'https://tossed.easyeat.ai/' }
  },
  {
    img: img1,
    title: 'Shannon',
    desc: 'Shannon project for EasyEat (Angular).',
    btn: { text: 'Live Demo', href: 'https://shannon.easyeat.ai/' }
  },
  {
    img: img4,
    title: 'Pizza Static Website',
    desc: 'Personal project (React).',
    btn: { text: 'Live Demo', href: 'https://nrc9r.csb.app/' }
  },
  {
    img: img5,
    title: 'Random Feed',
    desc: 'Personal project (Next.js).',
    btn: { text: 'Live Demo', href: 'https://next-js-feed.vercel.app/' }
  },
  {
    img: img2,
    title: 'Food Court Order System',
    desc: 'A real-time order dashboard using React and WebSockets.',
    btn: { text: 'Current Company', href: '#', primary: true }
  },
  {
    img: img3,
    title: 'IP Auto-Discovery System',
    desc: 'An offline-first app using Realm and SQLite for device IP syncing.',
    btn: { text: 'Current Company', href: '#', primary: true }
  }
];

function isValidHref(href) {
  return href && href !== '#';
}

export default function Project() {
  return (
    <section id='project'>
      <h2>Projects</h2>
      <div className='container project_container'>
        {projects.map((proj, i) => (
          <motion.article
            className='project_item pure-card'
            key={proj.title + i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 16, delay: i * 0.10 }}
            viewport={{ once: true }}
          >
            <div className='project_item-image'>
              <img src={proj.img} alt={proj.title + ' screenshot'} loading="lazy" />
            </div>
            <div className="project_item-content-static">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <div className="project_item-cta">
                {isValidHref(proj.btn.href) && (
                  <a href={proj.btn.href} className={`btn${proj.btn.primary ? ' btn-primary' : ''}`} target="_blank" rel="noopener noreferrer">{proj.btn.text}</a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
