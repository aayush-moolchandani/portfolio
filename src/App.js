import React, { useRef, Suspense, lazy } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'

const About = lazy(() => import('./components/about/About'));
const Skills = lazy(() => import('./components/skills/Skills'));
const Project = lazy(() => import('./components/project/Project'));
const Experience = lazy(() => import('./components/experience/Experience'));
const Contact = lazy(() => import('./components/contacts/Contact'));
const Footer = lazy(() => import('./components/footer/Footer'));
const WaveBG = lazy(() => import('./components/wave/WaveBG'));

export default function App() {
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  return (
    <>
      <Suspense fallback={<div />}> {/* background should load instantly, so minimal fallback */}
        <WaveBG sectionRefs={{ aboutRef, skillsRef, projectRef, contactRef }} />
      </Suspense>
      <Header />
      <Nav />
      <Suspense fallback={<div>Loading About...</div>}>
        <div ref={aboutRef}><About /></div>
      </Suspense>
      <Suspense fallback={<div>Loading Skills...</div>}>
        <div ref={skillsRef}><Skills /></div>
      </Suspense>
      <Suspense fallback={<div>Loading Projects...</div>}>
        <div ref={projectRef}><Project /></div>
      </Suspense>
      <Suspense fallback={<div>Loading Experience...</div>}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div>Loading Contact...</div>}>
        <div ref={contactRef}><Contact /></div>
      </Suspense>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </>
  )
}
