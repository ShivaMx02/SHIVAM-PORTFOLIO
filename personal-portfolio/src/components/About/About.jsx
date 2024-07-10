import React, { useEffect } from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'
import './About.css'

function About() {
    useEffect(()=>{
        Aos.init()
    },[])

  return (
    <div class='main-about'>
        <div data-aos='fade-down' data-aos-duration='1200' class='About-me'>
            <h1>About Me</h1>
        </div>
        <div class='about-intro'>
            <div data-aos='fade-up' data-aos-duration='1400'  class='about-intro-div'>
                <h3>My Introduction</h3>
                <p>I am well-versed in HTML, CSS and JavaScript , and other cutting edge frameworks and libraries,which allows me to implement interactive features. </p>
                <button >Download CV <i class="ri-file-text-line"></i></button>
            </div>
            <div data-aos='fade-up' data-aos-duration='1400' class='about-skills'>
                <div><h3>Frontend</h3></div>
                <div class='about-skills-set'>                        
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Tailwind css</span>
                    <span>JavaScript</span>
                    <span>React</span>
                </div>
            </div>
            <div data-aos='fade-up' data-aos-duration='1400' class='about-skills-1'>
                <div><h3>Database</h3></div>
                <div class='about-skills-set'>
                    <span className='bg-[#6E57E0] text-white px-2 py-1 rounded-md'>MySQL</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About