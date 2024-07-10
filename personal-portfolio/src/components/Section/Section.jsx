import React from 'react'
import './Section.css'

function Section() {
    return (
        <section>
            <div data-aos='fade-down' class='main-div'>
                <div data-aos='zoom-in' data-aos-duration='1500' class='intro-div'>
                    <p class='p-name'>Shivam Negi</p>
                    <h1 class='main-h1'>I'm <span>Frontend Developer</span></h1>
                    <p class='main-p'>Experienced frontend developer with a <br /> passion for creating visually stunning and user-friendly websites. </p>
                    <div class='main-btn'>
                        <button data-aos='fade-right' data-aos-duration='1900' class='btn-1'>Hire Me</button>
                        <button data-aos='fade-left' data-aos-duration='1900' class='btn-2'>Download CV <i class="ri-file-text-line"></i></button>
                    </div>
                    <div class='i-sec'>
                        <div class='icon'><i class="ri-instagram-line"></i></div>
                        <div class='icon'><i class="ri-linkedin-line"></i></div>
                        <div class='icon'><i class="ri-github-line"></i></div>
                    </div>
                </div>
            </div>
        </section>
      )
}

export default Section