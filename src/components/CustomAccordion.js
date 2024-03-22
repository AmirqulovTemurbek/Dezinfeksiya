import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import "../scss/main.css";

const CustomAccordion = ({title,children}) => {

    const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = ( )=> {
    setIsOpen(!isOpen);
  }
  return (
    <div className={`accordion ${isOpen ? "active" : ""}`}> 
          <div className={`accordion-header ${isOpen ? "active" : ""}`} onClick={toggleAccordion}>
            <h3>{title}</h3>

            <span className={`material-symbols-outlined ${isOpen ? "active" : ""}`}>
              <FaChevronDown/>
            </span>
          </div>

          {isOpen && (
            <div className="accordion-content">
              {children}
            </div>
          )}
        </div>
  )
}

export default  CustomAccordion;