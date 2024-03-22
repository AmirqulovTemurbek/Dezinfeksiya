import React from "react";
import Navbar from "./components/Navbar";
import HomeImg from "./images/Header.png";
import AboutImage1 from "./images/Mask group.png";
import AboutImage2 from "./images/Mask group (1).png";
import AboutImage3 from "./images/Mask group (2).png";
import Tarakan from "./images/Tarakan.png";
import Krisa from "./images/Krisa.png";
import Pashsha from "./images/Pashsha.png";
import "./scss/main.css";
import { FaChevronDown } from "react-icons/fa";
import CustomAccordion from "./components/CustomAccordion";

const App = () => {

  return (
    <React.Fragment>
      <Navbar/>
      <div className="home container">
        <div className="home_left">
          <h1 className="home_title">
            Дизинфексия хизмати
          </h1>
          <p className="home_info">Биз Тошкентда 10 йилдан бери 
              профессионал дезинфексия ишларини 
              олиб борамиз, шунинг учун биринчи марта 
              зараркунандалардан қандай қутулишни 
              биламиз.
          </p>
          <button className="home_btn">Богланиш</button>
        </div>
        <div className="home_right">
          <img src={HomeImg}/> 
        </div>
      </div>
      
      <div className="about container" id="about">
        <h1>Ҳақида</h1>
        <div className="row">
          <div className="about_cards">
            <img src={AboutImage1} />
            <h3 class="about_card_title">Тезда Хизмат <br/> Кўрсатиш</h3>
            <p class="about_card_text">АРИЗАЛАР КУНИГА 24 СОАТ ҚАБУЛ ҚИЛИНАДИ. АГАР МУАММО ШОШИЛИНЧ БЎЛСА, БИЗ ДАРҲОЛ КЕТИШИМИЗ МУМКИН. ШУ БИЛАН БИРГА, СИФАТ МУКАММАЛ БЎЛИБ ҚОЛАДИ.</p>
          </div>
          <div className="about_cards">
            <img src={AboutImage2} />
            <h3 class="about_card_title">Йетук Мутаҳасислаpимиз</h3>
            <p class="about_card_text">БИЗНИНГ ХОДИМЛАРИМИЗ ҲАММА НАРСАГА ҒАМХЎРЛИК ҚИЛАДИ: ҲИСОБ-КИТОБЛАР, ХОНАНИ ТАЙЁРЛАШ, ҚАЙТА ИШЛАШ, ЯКУНИЙ ТОЗАЛАШ, ВЕНТИЛЯТСИЯ ВА НАЗОРАТ ТЕКШИРУВИ.</p>
          </div>
          <div className="about_cards">
            <img src={AboutImage3} />
            <h3 class="about_card_title">Сизга Мақул Вақтда</h3>
            <p class="about_card_text">СИЗ ЎЗИНГИЗ УЧУН МАҚУЛ ВА ҚУЛАЙ ВАҚТНИ ТАНЛАНГ ВА БИЗГА МУРОЖАТ ҚИЛИНГ. СИЗГА КАФОЛАТЛАНГАН ВА САМАРАЛИ НАТИЖАНИ ОЛИБ БОРАМИЗ  </p>
          </div>
        </div>
      </div>

      <div className="services container" id="services">
        <h1>Услуги</h1>
        <p class="service_info">Мы обеспечиваем вам эффективное и гарантированное обслуживание.</p>
        <div className="services_cards">
          <div className="services_card">
            <img src={Tarakan} />
            <div className="services_right">
              <h3 class="services_title">Дезинфекция – Уничтожить Вредоносные Микроорганизмы</h3>
              <p class="services_text">Главная задача любой дезинфекции уничтожить опасные микроорганизмы, способные вызывать инфекции и заболевания. Дезинфекционные мероприятия избавляют пространство от плесени, вирусов, грибка, бактерий. Процедура очищает среду от патогенных организмов, Если вы беспричинно чувствуете недомогание, утомление, слабость, необходимо вызвать дезинфекторов.</p>
            </div>
          </div>
          <div className="services_card">
          <img src={Pashsha} />
            <div className="services_right">
              <h3 class="services_title">Дезинсекция – Уничтожение Насекомых</h3>
              <p class="services_text">Со словом «дезинсекция» многие впервые сталкиваются, когда ищут способ избавиться от нежелательных соседей – клопов, тараканов, муравьев и других насекомых. Они сами по себе неприятны, к тому же еще известные переносчики инфекций. Дезинсекция – это уничтожение насекомых: комаров, мух, клопов, тараканов, моли, клещей, короедов, мокриц и прочих ползающих и летающих. Наравне с дератизацией, обработка производится с помощью специнструмента, к которому относятся генераторы холодного и горячего тумана, а так же профессиональных инсектицидов.</p>
            </div>
          </div>
          <div className="services_card">
            <img src={Krisa} />
            <div className="services_right">
              <h3 class="services_title">Дератизация — Уничтожению Грызунов.</h3>
              <p class="services_text">Дератизация в Ташкенте представляет собой целый комплекс сложных мер, направленных на уничтожение грызунов. Как известно, грызуны являются довольно выносливыми существами, которые отлично справляются с различного рода опасными воздействиями. Именно поэтому, чтобы их уничтожить необходимо использовать целый ряд методов. Дератизация в Ташкенте производится везде, где появились грызуны: многоэтажных зданиях, складах, магазинах, заведениях общепита, частных домах, на приусадебных участках.</p>
            </div>
          </div>
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

      <div>
        
      </div>
    </React.Fragment>
  );
}

export default App;
