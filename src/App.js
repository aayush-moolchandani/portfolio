import React, { useState } from 'react'
import About from './components/about/About'
import Experince from './components/experience/Experince'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Service from './components/services/Service'
import Contact from './components/contacts/Contact'
import Project from './components/project/Project'

export default function App() {
  return (
    <>
    <Header />
    <About />
    <Experince />
    <Service />
    <Project />
    <Contact />
    <Nav/>
    </>
  )
}
