import React, { useState } from 'react';
import "./components/contact/contact.css";
import "aos/dist/aos.css";
import PersonContact from "./components/img/person-in-white-chemical-protection-suit-holding-sprayer-with-disinfectant-chemicals-to-stop-spreading-highly-contagious-virus_342744-937-removebg-preview 1.png";
import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";


i18next
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)

 const Contact = () => {
    const { t } = useTranslation();

    const [form, setForm] = useState({
      name:'',
      phone:'+998 ',
    });
    const [showNameError, setShowNameError] = useState(false);
    const [showPhoneError, setShowPhoneError] = useState(false);
    const [snackOpen, setSnackOpen] = useState(false); // State for Snackbar
  
  
  
    const tgToken = "6949737795:AAFpmhCniHK_L7k4Cs6Oz6bVyN_XmaijV7U";
    const chatId = "2026371494";
  
    const sendUserInfo = async () => {
      try {
        const { name, phone } = form;
        const message = `Name: ${name}%0APhone: ${phone}`; // Encode message text
        const url = `https://api.telegram.org/bot${tgToken}/sendMessage?chat_id=${chatId}&text=${message}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Failed to send message to Telegram bot.');
        }
  
        console.log('Message sent successfully to Telegram bot.');
        resetForm();
        setSnackOpen(true);
      } catch (error) {
        console.error('Error occurred while sending message to Telegram bot:', error);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault(); 
  
      if (form.name.length < 4) {
        setShowNameError(true);
        return; 
      } else {
        setShowNameError(false);
      }
  
      if (form.phone.length < 13) {
        setShowPhoneError(true);
        return; 
      } else {
        setShowPhoneError(false);
      }
      sendUserInfo();
      
    };
  
    const resetForm = () => {
      setForm({
        name: '',
        phone: '+998 ',
      });
      setShowNameError(false);
      setShowPhoneError(false);
    };
  
    const handlePhoneChange = (e) => {
      let newValue = e.target.value;
      
      if (!newValue.startsWith('+998 ')) {
        newValue = '+998 ' + newValue;
      }
    
      if (newValue.length > 4) {
        newValue = newValue.substring(5).replace(/[^\d]+/g, ''); 
        newValue = '+998 ' + newValue.substring(0, 9);
      }
    
      setForm({ ...form, phone: newValue });
    };


  return (
    <div className='contact container' id='connect'>
        <div className="contact-box">
                <div className="contact-inputs" 
                    data-aos="flip-down"
                    data-aos-duration="900">
                    <div className="contact-inputs_title">
                        <h4>{t("contact.title")}</h4>
                    </div>
                    <form className="contact-inputs_items" action="" onSubmit={handleSubmit}>
                        <input type="text" value={form.name}  onChange={(e) => setForm({...form, name:e.target.value})} placeholder={t("contact.title")} />
                        <input type="tel" value={form.phone} pattern="[0-9]{9}"  onChange={handlePhoneChange}  placeholder='+998-90-123-45-67'/>
                    </form>
                    <div className="contact-inputs_btn">
                        <button type='submit' className='contact-btn'>{t('contact.btn')}</button>
                    </div>
                </div>
                <div className="contact-img"
                      data-aos="flip-up"
                      data-aos-duration="900">
                    <img src={PersonContact} alt="PersDizinfek" />
                </div>
        </div>
    </div>
  )
}

export default Contact;