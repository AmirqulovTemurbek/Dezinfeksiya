import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Contact from "../src/components/contact/contact";  
import HomeImg from "./images/Header.png";
import AboutImage1 from "./images/Mask group.png";
import AboutImage2 from "./images/Mask group (1).png";
import AboutImage3 from "./images/Mask group (2).png";
import Tarakan from "./images/Tarakan.png";
import Krisa from "./images/Krisa.png";
import Pashsha from "./images/Pashsha.png";
import CleanerImg from "./images/obrazovaniye_s 2.png";
import Galochka from "./images/3dicons.png";
import "../src/components/contact/contact"
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
            Дизинфексия хизмати
          </h1>
          <p className="home_info" 
              data-aos="fade-right">Биз Тошкентда 10 йилдан бери 
              профессионал дезинфексия ишларини 
              олиб борамиз, шунинг учун биринчи марта 
              зараркунандалардан қандай қутулишни 
              биламиз.
          </p>
          <button className="home_btn" 
              data-aos="fade-right">Богланиш</button>
        </div>
        <div className="home_right">
          <img className="home-image" src={HomeImg}/> 
        </div>
      </div>
      
      <div className="about container" id="about">
        <h1 className="about_title" data-aos="fade-up"
          data-aos-duration="500">Ҳақида</h1>
        <div className="row">
          <div className="about_cards" data-aos="fade-right">
            <img src={AboutImage1} />
            <h3 class="about_card_title aboutCardOne">Тезда Хизмат <br/> Кўрсатиш</h3>
            <p class="about_card_text aboutTextOne">АРИЗАЛАР КУНИГА 24 СОАТ ҚАБУЛ ҚИЛИНАДИ. АГАР МУАММО ШОШИЛИНЧ БЎЛСА, БИЗ ДАРҲОЛ КЕТИШИМИЗ МУМКИН. ШУ БИЛАН БИРГА, СИФАТ МУКАММАЛ БЎЛИБ ҚОЛАДИ.</p>
          </div>
          <div className="about_cards" data-aos="fade-right">
            <img src={AboutImage2} />
            <h3 class="about_card_title aboutCardTwo">Йетук Мутаҳасислаpимиз</h3>
            <p class="about_card_text">БИЗНИНГ ХОДИМЛАРИМИЗ ҲАММА НАРСАГА ҒАМХЎРЛИК ҚИЛАДИ: ҲИСОБ-КИТОБЛАР, ХОНАНИ ТАЙЁРЛАШ, ҚАЙТА ИШЛАШ, ЯКУНИЙ ТОЗАЛАШ, ВЕНТИЛЯТСИЯ ВА НАЗОРАТ ТЕКШИРУВИ.</p>
          </div>
          <div className="about_cards" data-aos="fade-right">
            <img src={AboutImage3} />
            <h3 class="about_card_title aboutCardThree">Сизга Мақул Вақтда</h3>
            <p class="about_card_text">СИЗ ЎЗИНГИЗ УЧУН МАҚУЛ ВА ҚУЛАЙ ВАҚТНИ ТАНЛАНГ ВА БИЗГА МУРОЖАТ ҚИЛИНГ. СИЗГА КАФОЛАТЛАНГАН ВА САМАРАЛИ НАТИЖАНИ ОЛИБ БОРАМИЗ  </p>
          </div>
        </div>
      </div>

      <div className="clean_card container">
        <div className="col-5 clean-card-right"></div>
        <div className="clean_info">
          <h2 class="clean-h_title" data-aos="fade-left">Считай клoпы и вредных <br/> насекомых <br/> больше нет!!!</h2>
          <p class="clean-h_text" data-aos="fade-left">Наша компания, работающая уже много лет, нами  довольна.</p>
          <button className="clean_btn" 
              data-aos="fade-left">Богланиш</button>
        </div>
      </div>

      <div className="services container" id="services">
        <h1 data-aos="flip-down">Услуги</h1>
        <p class="service_info" data-aos="flip-up">Мы обеспечиваем вам эффективное и гарантированное обслуживание.</p>
        <div className="services_cards">
          <div className="services_card" data-aos="fade-right">
            <img src={Tarakan} />
            <div className="services_right">
              <h3 class="services_title">Дезинфекция – Уничтожить Вредоносные Микроорганизмы</h3>
              <p class="services_text">Главная задача любой дезинфекции уничтожить опасные микроорганизмы, способные вызывать инфекции и заболевания. Дезинфекционные мероприятия избавляют пространство от плесени, вирусов, грибка, бактерий. Процедура очищает среду от патогенных организмов, Если вы беспричинно чувствуете недомогание, утомление, слабость, необходимо вызвать дезинфекторов.</p>
            </div>
          </div>
          <div className="services_card" data-aos="fade-right">
          <img src={Pashsha} />
            <div className="services_right">
              <h3 class="services_title">Дезинсекция – Уничтожение Насекомых</h3>
              <p class="services_text">Со словом «дезинсекция» многие впервые сталкиваются, когда ищут способ избавиться от нежелательных соседей – клопов, тараканов, муравьев и других насекомых. Они сами по себе неприятны, к тому же еще известные переносчики инфекций. Дезинсекция – это уничтожение насекомых: комаров, мух, клопов, тараканов, моли, клещей, короедов, мокриц и прочих ползающих и летающих. Наравне с дератизацией, обработка производится с помощью специнструмента, к которому относятся генераторы холодного и горячего тумана, а так же профессиональных инсектицидов.</p>
            </div>
          </div>
          <div className="services_card" data-aos="fade-right">
            <img src={Krisa} />
            <div className="services_right">
              <h3 class="services_title">Дератизация — Уничтожению Грызунов.</h3>
              <p class="services_text">Дератизация в Ташкенте представляет собой целый комплекс сложных мер, направленных на уничтожение грызунов. Как известно, грызуны являются довольно выносливыми существами, которые отлично справляются с различного рода опасными воздействиями. Именно поэтому, чтобы их уничтожить необходимо использовать целый ряд методов. Дератизация в Ташкенте производится везде, где появились грызуны: многоэтажных зданиях, складах, магазинах, заведениях общепита, частных домах, на приусадебных участках.</p>
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
          <h3 data-aos="fade-right" data-aos-offset="300">Официальная гарантия - 1 год. Оказываем услуги физическим и юридическим лицам. Услуги лицензированы!!!</h3>
          <button className="cleaner_btn" 
              data-aos="fade-right" 
              data-aos-offset="300">Богланиш</button>
        </div>
      </div>

      <div className="faq container">
        <div className="faq-left">
          <h2 className="faq-title">ФАҚ</h2>
        </div>
        <div className="faq_right">
          <CustomAccordion title="Чем Производится Уничтожение Вредителей?">
            <p> При помощи специального оборудования инсектициды превращаются в аэрозольный туман и проникают в мельчайшие зазоры между обоями, стенами и плинтусами, в невидимые глазу потенциальные «укрытия» насекомых.</p>
          </CustomAccordion>
          <CustomAccordion title="Чем Производится Уничтожение Вредителей?">
            <p> При помощи специального оборудования инсектициды превращаются в аэрозольный туман и проникают в мельчайшие зазоры между обоями, стенами и плинтусами, в невидимые глазу потенциальные «укрытия» насекомых.</p>
          </CustomAccordion>
          <CustomAccordion title="Чем Производится Уничтожение Вредителей?">
            <p> При помощи специального оборудования инсектициды превращаются в аэрозольный туман и проникают в мельчайшие зазоры между обоями, стенами и плинтусами, в невидимые глазу потенциальные «укрытия» насекомых.</p>
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
