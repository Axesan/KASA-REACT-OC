import React, { useState } from 'react';
import { faChevronDown,faChevronUp } from'@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Dropdown  (props)  {
    // UseState qui prend en valeur un objet qui est est false ;
    // setIsDropdownVisible qui changera l'etat de notre 'dropdown' a true 
    const [isDropdownVisible, setIsDropdownVisible] = useState({
        dropdown: false
      });
   
        const toggleDropdown = (index) => {
            setIsDropdownVisible({
              // L'opérateur spread '...' est utilisé pour copier toutes les propriétés de l'objet isDropdownVisible
              // Equivalent a True False
              ...isDropdownVisible,
              [`dropdown${index}`]: !isDropdownVisible[`dropdown${index}`]
            });
          };
    return (
        <div className='dropdowns'>
                    <div className="card-header" onClick={() => toggleDropdown(props.numberDropdown)}>
                        {props.title}
                        {isDropdownVisible[`dropdown${props.numberDropdown}`] ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                    </div>
                    <div className={`card-contend ${isDropdownVisible[`dropdown${props.numberDropdown}`] ? 'fade-in' : 'fade-out hidden'}`}>
                      {props.descriptions}
                    </div>
        </div>
    );
};

export default Dropdown;