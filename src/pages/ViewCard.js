/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Caroussel from '../components/Caroussel';
import { useParams } from 'react-router-dom';
import Data from "../data/data.json";
import NotFound from './NotFound';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronUp,faChevronDown ,faStar as solidStarIcone} from '@fortawesome/free-solid-svg-icons';


import { faStar as regularStarIcone} from '@fortawesome/free-regular-svg-icons';
const ViewCard = () => {
   
    // Recuperation de notre ID de produits (GET)
    const {id} = useParams()

        // Utilisation de find() renvoie undefined si il existe pas . 
        const products = Data.find((product) => (product.id === id));
       
        if (products === undefined) {
            return <NotFound/>
        }
        const { title, location, rating, host, equipments, description, pictures,tags } = products;
      

        const EQUIPMENT = [];
        const TAGS = [];
        const ImgCarrousel = [];



        equipments.forEach((data)=>{
            EQUIPMENT.push(<li key={data}>{data}</li>)
        })

       tags.forEach((data)=>{
        TAGS.push(<span className='badge-items' key={data}>{data}</span>)
       })

       pictures.forEach((data)=>{
        ImgCarrousel.push(<img src={data} key={data} alt={title} />)

       })



       // Show card       
       const NoteUser = rating;
       const star = [regularStarIcone,regularStarIcone,regularStarIcone,regularStarIcone,regularStarIcone]
       const result = star.fill(solidStarIcone ,0,NoteUser)
  
      


       //Dropdown
       const [isDropdownVisible, setIsDropdownVisible] = useState(false);
       const [isDropdown2Visible, setIsDropdown2Visible] = useState(false);

        const toggleDropdown = () => {
            setIsDropdownVisible(!isDropdownVisible);
        }
       
        const toggleDropdown2 = () => {
            setIsDropdown2Visible(!isDropdown2Visible);
        }
        
        return (
            <div>
                 {/* Carrousel */}
                 <section>
                    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto'}}>
                    
                        <Caroussel paginate={ImgCarrousel.length}>
                            {/* BOUCLES SUR LES IMAGES UTILISATION DE FOREACH */}
            
                            {ImgCarrousel}
                        
                        
                        </Caroussel> 
                    </div>
                </section>

                <div className='container view-card'>
               

             
                    <section className='contend_title_star'>
                        <div className="title">
                            <div>
                                <h1>{title}</h1>
                                <span>{location}</span>
                            </div>
                            <div className='badge-tags'>
                                {TAGS}
                            </div>
                        </div>

                    

                        <div className="bloc_profile">
                            <div className='profile-contend'>
                                    <span> {host.name}</span>
                                        <img className='profile' src={host.picture} key={host.name} alt={host.name} />
                            </div>
                            <div className='badge-star'>
                            
                                {result.map((star, index) => (
                                    <FontAwesomeIcon key={index} className={star === solidStarIcone ? "icon" : "icon-regular"}icon={star} />
                                ))}
                                
                            </div>
                        </div>


                    
                    </section>

                    <section>
                        <div className="infos-logement">
                            <div className="card-description">
                                <div className={"header-card"} id='card-header' onClick={toggleDropdown}>
                                    <span>Descriptions</span>
                                    {isDropdownVisible ?  <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                                </div>
                                <div className={`contend-card ${isDropdownVisible ? 'fade-in' : 'fade-out hidden'}`} id='card-contend'>
                                    {description}
                                </div>
                            </div>
                            <div className="card-equipement">
                                <div className="header-card"  onClick={toggleDropdown2} >
                                    <span>Equipement</span>
                                    {isDropdown2Visible ?  <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                                </div>
                                <div className={`contend-card ${isDropdown2Visible ? 'fade-in' : 'fade-out hidden'}`} id='dropdown'>
                                    <ul>
                                        {EQUIPMENT}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
    
              
              
                </div>
            </div>
        );
      
    
        
    

  
};

console.clear();
export default ViewCard;