import React from 'react'
import './service.css'

export default function Service() {
  return (
    <section id='service'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className='container service_container'>
        <article className='service'>
         <div className='service_head'>
           <h3>
             UI/UX Design
           </h3>
         </div>
        </article>
        <article className='service'>
         <div className='service_head'>
           <h3>
            Web Development
           </h3>
         </div>
        </article>
        <article className='service'>
         <div className='service_head'>
           <h3>
            Web Optimisation
           </h3>
         </div>
        </article>
        <article className='service'>
         <div className='service_head'>
           <h3>
           CI/CD Pipeline
           </h3>
         </div>
        </article>
        <article className='service'>
         <div className='service_head'>
           <h3>
           AWS Services
           </h3>
         </div>
        </article>
        <article className='service'>
         <div className='service_head'>
           <h3>
          Nest.js (APIS)
           </h3>
         </div>
        </article>
        

      </div>
    </section>
  )
}
