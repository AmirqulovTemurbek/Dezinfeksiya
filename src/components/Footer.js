import React from "react";
import FooterLogo from "../images/Logo.png";
import { CiLocationOn } from "react-icons/ci";
import { FiArrowUpRight } from "react-icons/fi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import Aos from "aos";
import 'aos/dist/aos.css';
import "../scss/main.css";

 const Footer = () => {
    
  return (
    <div className='footer container'>
        <div className='footer-left'>
            <img className='footer-image'  src={FooterLogo}/>
        </div>
        <div className='footer-right'>
            <a className='footer-link' href='home' data-aos="fade-right">
                <div className='footer-icon'>
                    <CiLocationOn/>
                </div>
                <p className='footer-info'>Узбекистан, город Ташкент</p>
                <div className='footer-right-icon'>
                    <FiArrowUpRight/>
                </div>
            </a>
            <a className='footer-link' data-aos="fade-right">
            <div className='footer-icon'>
                    <MdOutlinePhoneInTalk/>
                </div>
                <p className='footer-info'>+998 93 459 87 77</p>
                <div className='footer-right-icon'>
                    <FiArrowUpRight/>
                </div>
            </a>
        </div>
    </div>
  )
}
export default Footer;