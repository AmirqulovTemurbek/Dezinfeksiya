import React from 'react';
import "./contact.css";
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import "aos/dist/aos.css"
import Contact from "../img/person-in-white-chemical-protection-suit-holding-sprayer-with-disinfectant-chemicals-to-stop-spreading-highly-contagious-virus_342744-937-removebg-preview 1.png";

 const contact = () => {
    
  return (
    <div className='contact container' id='connect'>
        <div className="contact-box">
                <div className="contact-inputs" 
                    data-aos="flip-down"
                    data-aos-duration="900">
                    <div className="contact-inputs_title">
                        <h4>Оставьте свою информацию</h4>
                    </div>
                    <div className="contact-inputs_items">
                        <input type="text" placeholder="Ваше имя" />
                        <input type="nuumber"  placeholder='+998-90-123-45-67'/>
                    </div>
                    <div className="contact-inputs_btn">
                        <button type='submit' className='contact-btn'>Отправка</button>
                    </div>
                </div>
                <div className="contact-img"
                      data-aos="flip-up"
                      data-aos-duration="900">
                    <img src={Contact} alt="PersDizinfek" />
                </div>
        </div>
    </div>
  )
}

export default contact