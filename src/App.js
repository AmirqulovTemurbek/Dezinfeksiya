import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Contact from "./Contact";  
import HomeImg from "./images/Header.png";
import AboutImage1 from "./images/Mask group.png";
import AboutImage2 from "./images/Mask group (1).png";
import AboutImage3 from "./images/Mask group (2).png";
import Tarakan from "./images/Tarakan.png";
import Krisa from "./images/Krisa.png";
import Pashsha from "./images/Pashsha.png";
import CleanerImg from "./images/obrazovaniye_s 2.png";
import Galochka from "./images/3dicons.png";
import "./scss/main.css";
import CustomAccordion from "./components/CustomAccordion";
import Aos from "aos";
import 'aos/dist/aos.css';
import {useTranslation } from "react-i18next";
import Footer from "./components/Footer";


const App = () => {
  useEffect(() => {
    Aos.init();
  }, [])

  const { i18n, t } = useTranslation();

 

  return (
    <React.Fragment>
      <Navbar/>

      <div className="home container" id="home">
        <div className="home_left">
          <h1 className="home_title" 
              data-aos="fade-right">
            {t("home.home_title")}
          </h1>
          <p className="home_info" 
              data-aos="fade-right">
                {t("home.home_info")}
          </p>
          <button className="home_btn" 
              data-aos="fade-right">{t("home.home_btn")}</button>
        </div>
        <div className="home_right">
          <img className="home-image" src={HomeImg}/> 
        </div>
      </div>
      
      <div className="about container" id="about">
        <h1 className="about_title" data-aos="fade-up"
          data-aos-duration="500">{t("about.about_title")}</h1>
        <div className="row">
          <div className="about_cards" data-aos="fade-right">
            <img src={AboutImage1} />
            <h3 class="about_card_title aboutCardOne">{t("about.aboutCardOne")}</h3>
            <p class="about_card_text aboutTextOne">{t("about.aboutTextOne")}</p>
          </div>
          <div className="about_cards" data-aos="fade-right">
            <img src={AboutImage2} />
            <h3 class="about_card_title aboutCardTwo">{t("about.aboutCardTwo")}</h3>
            <p class="about_card_text">{t("about.aboutTextTwo")}</p>
          </div>
          <div className="about_cards" data-aos="fade-right">
            <img src={AboutImage3} />
            <h3 class="about_card_title aboutCardThree">{t("about.aboutCardThree")}</h3>
            <p class="about_card_text">{t("about.aboutTextThree")}</p>
          </div>
        </div>
      </div>

      <div className="clean_card container">
        <div className="col-5 clean-card-right"></div>
        <div className="clean_info">
          <h2 class="clean-h_title" data-aos="fade-left">{t("clean_card.clean-h_title")}</h2>
          <p class="clean-h_text" data-aos="fade-left">{t("clean_card.clean-h_text")}</p>
          <button className="clean_btn" 
              data-aos="fade-left">{t("clean_card.clean_btn")}</button>
        </div>
      </div>

      <div className="services container" id="services">
        <h1 data-aos="flip-down">{t("services.services-title")}</h1>
        <p class="service_info" data-aos="flip-up">{t("services.services-info")}</p>
        <div className="services_cards">
          <div className="services_card" data-aos="fade-right">
            <img src={Tarakan} />
            <div className="services_right">
              <h3 class="services_title">{t("services.services-One")}</h3>
              <p class="services_text">{t("services.services-PageOne")}</p>
            </div>
          </div>
          <div className="services_card" data-aos="fade-right">
          <img src={Pashsha} />
            <div className="services_right">
              <h3 class="services_title">{t("services.services-Two")}</h3>
              <p class="services_text">{t("services.services-PageTwo")}</p>
            </div>
          </div>
          <div className="services_card" data-aos="fade-right">
            <img src={Krisa} />
            <div className="services_right">
              <h3 class="services_title">{t("services.services-Three")}</h3>
              <p class="services_text">{t("services.services-PageThree")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cleaner container">
        <div className="cleaner_image">
          <img src={CleanerImg} data-aos="fade-right" />
        </div>
        <div className="cleaner_right " >
          <img src={Galochka} data-aos="fade-right" data-aos-offset="300"/>
          <h3 data-aos="fade-right" data-aos-offset="300">{t("cleaner.cleaner-Info")}</h3>
          <button className="cleaner_btn" 
              data-aos="fade-right" 
              data-aos-offset="300">{t("cleaner.cleaner-btn")}</button>
        </div>
      </div>

      <div className="faq container">
        <div className="faq-left">
          <h2 className="faq-title">{t("faq.faqInfo")}</h2>
        </div>
        <div className="faq_right">
          <CustomAccordion title={t("faq.faqTitleOne")}>
            <p> {t("faq.faqInfoOne")}</p>
          </CustomAccordion>
          <CustomAccordion title={t("faq.faqTitleTwo")}>
            <p> {t("faq.faqInfoTwo")}</p>
          </CustomAccordion>
          <CustomAccordion title={t("faq.faqTitleThree")}>
            <p> {t("faq.faqInfoThree")}</p>
          </CustomAccordion>
        </div>
      </div>


      <Contact/>
      <Footer/>
      <div>
      </div>
    </React.Fragment>
  );
}

export default App;
