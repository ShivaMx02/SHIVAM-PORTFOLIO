import React from 'react'
import './Footer.css'


function Footer() {
  return (
        <footer>
            <div>
                <h1>Shivam Negi</h1>
            </div>
            <div>
                <ul>
                    <li><a href='/Section.jsx'>Home</a></li>
                    <li><a href='/About.jsx'>About</a></li>
                    <li><a href="#projects" >Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div class='links-div'>
                <div><i class="ri-instagram-line"></i></div>
                <div><i class="ri-linkedin-line"></i></div>
                <div><i class="ri-github-line"></i></div>
            </div>
            <div>
                <p>Copyright © <a href="#">Shivam Negi</a>- All rights reserved</p>
            </div>
        </footer>
  )
}

export default Footer