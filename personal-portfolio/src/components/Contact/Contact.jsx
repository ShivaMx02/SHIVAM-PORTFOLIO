import React from 'react'
import './Contact.css'
import Aos from "aos";
import 'aos/dist/aos.css'

function Contact() {
  return (
    <section class='contact-section'>
    <div data-aos='fade-down' data-aos-duration='1200' class='contact-div'>
        <h1> Get in touch </h1>
        <p>  Do you have a project in your mind, contact me here </p>
    </div>
    <div class='find-me'>
        <div data-aos='fade-right' data-aos-duration='1500' class='first-div'>
            <h1> Find Me <i class="ri-corner-right-down-fill"></i> </h1>
            <p> <i class="ri-mail-line"></i> Email: negishivam363@gmail.com </p>
            <p> <i class="ri-customer-service-line"></i> Mob: 8909529254 </p>
        </div>
        <div data-aos='fade-left' data-aos-duration='1500' class='second-div'>
            <div class='s-d-1'>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
            </div>
            <div className='s-d-2'>
                <textarea placeholder="Message"></textarea>
            </div>
        </div>
    </div>
    <div class='btn-div'>
        <button>Send <i class="ri-send-plane-2-line"></i></button>
    </div>
</section>
  )
}

export default Contact