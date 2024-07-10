import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Section from './components/Section/Section.jsx'
import About from './components/About/About.jsx'
import Education from './components/Education/Education.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Section />
    <About />
    <Education />
    <Contact />
    <Footer />
  </React.StrictMode>,
)
