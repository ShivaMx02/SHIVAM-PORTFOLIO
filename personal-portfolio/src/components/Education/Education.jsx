import React, { useEffect } from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'
import './Education.css'


function Project() {
     
  return (
    <section class='edu-sec'>
        <div data-aos='fade-down' data-aos-duration='1000' class='edu-heading'>
            <h1>Education</h1>
        </div>
        <div class='main-edu'>
            <div data-aos='fade-up' data-aos-duration='1300' class='Education'>
                <h3>Graduation</h3>
                <label>Degree of BCA</label>
                <p>Currently pursuing Bca.</p>
            </div>
            <div data-aos='fade-up' data-aos-duration='1300' class='Education'>
                <h3>Diploma</h3>
                <label>Diploma in I.T</label>
                <p>Completed three years diploma of Information techonology.</p>
            </div>
            <div data-aos='fade-up' data-aos-duration='1300' class='Education'>
                <h3>Intermediate</h3>
                <label>Certificate of Intermediate School</label>
                <p>Completed Intermedidte School in 2020.</p>
            </div>
        </div>
    </section>
  )
}

export default Project