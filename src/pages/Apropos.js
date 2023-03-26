import React from 'react';
import Banner from './../components/Banner';
import Dropdown from './../components/Dropdown';
const Apropos = () => {
   
    return (
        <div>      
                <section>
                    <Banner title='' classPicture='banner-apropos'/>
                </section>
            <div className="container">
                <div className="card-apropos">
                    <Dropdown title="Fiabilité" descriptions=" Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." numberDropdown={1}/>
                </div>
                <div className="card-apropos">
                    <Dropdown title="Respect" descriptions="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." numberDropdown={1}/>
                </div>

                <div className="card-apropos">
                    <Dropdown title="Service" descriptions="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." numberDropdown={1}/>
                </div>

                <div className="card-apropos">
                    <Dropdown title="Securité" descriptions=" La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." numberDropdown={1}/>
                </div>
                </div>
            </div>
       
    );
};

export default Apropos;