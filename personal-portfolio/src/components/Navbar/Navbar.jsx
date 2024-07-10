import React, { useEffect } from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'
import './Navbar.css'


function Navbar() {

    useEffect(()=>{
            Aos.init({})
        },[])

  return (
    <nav data-aos='fade-down' data-aos-duration='1000' >
        <div>
            <p>Shivam.</p>
        </div>
        <div class='link-div'>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about" >About</a></li>
                <li><a href="#projects" >Education</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button>Download CV <i class="ri-file-text-line"></i></button>
        </div>
        <div class='menu-icon'>
            <i class="ri-menu-line"></i>
        </div>   
   </nav>
  )
}

export default Navbar