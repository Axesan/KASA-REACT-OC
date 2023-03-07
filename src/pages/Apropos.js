import React, { useState } from 'react';
import Bannerapropos from './../components/Bannerapropos';
import { faChevronDown,faChevronUp } from'@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImgApropos from "./IMG/banner-Apropos.png"
const Apropos = () => {
    const BannerCover = ImgApropos
    const BannerTitle = "Chez vous, partout et ailleurs"


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
        <div className='container'>
      
            <Bannerapropos picture={BannerCover} title={BannerTitle}/>
            
                <div className="card-apropos">
                    <div className="card-header"  onClick={()=>toggleDropdown(1)}>
                        Fiabilité
                        {isDropdownVisible.dropdown1 ?  <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                    </div>
                    <div className={`card-contend ${isDropdownVisible.dropdown1 ? "fade-in" : "fade-out hidden"}`}>
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                    </div>
                </div>
                <div className="card-apropos">
                    <div className="card-header" onClick={()=>toggleDropdown(2)}>
                        Respect  {isDropdownVisible.dropdown2 ?  <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                    </div>
                    <div className={`card-contend ${isDropdownVisible.dropdown2 ? "fade-in" : "fade-out hidden"}`}>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </div>
                </div>

                <div className="card-apropos">
                    <div className="card-header"  onClick={()=>toggleDropdown(3)}>
                        Service  {isDropdownVisible.dropdown3 ?  <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                    </div>
                    <div className={`card-contend ${isDropdownVisible.dropdown3 ? "fade-in" : "fade-out hidden"}`}>
                    Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                    </div>
                </div>

                <div className="card-apropos">
                    <div className="card-header" onClick={()=>toggleDropdown(4)}>
                        Securité {isDropdownVisible.dropdown4 ?  <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                    </div>
                    <div className={`card-contend ${isDropdownVisible.dropdown4 ? "fade-in" : "fade-out hidden"}`}>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </div>
                </div>

            </div>
       
    );
};

export default Apropos;