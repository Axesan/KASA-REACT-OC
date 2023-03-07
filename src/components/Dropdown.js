import React, { useState } from 'react';
import { faChevronDown,faChevronUp } from'@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Dropdown  (props)  {
    const [isDropdownVisible, setIsDropdownVisible] = useState({
        dropdown1: false,
        dropdown2: false,
        dropdown3: false,
        dropdown4: false
      });
   
        const toggleDropdown = (index) => {
            setIsDropdownVisible({
              ...isDropdownVisible,
              [`dropdown${index}`]: !isDropdownVisible[`dropdown${index}`]
            });
          };
    return (
        <div className='dropdowns'>
                    <div className="card-header"  onClick={()=>toggleDropdown(props.numberDropdown)}>
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