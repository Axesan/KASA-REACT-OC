import React from 'react';
import Caroussel from '../components/Caroussel';
import { useParams } from 'react-router-dom';
import Data from "../data/data.json";
import NotFound from './NotFound';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar as solidStarIcone} from '@fortawesome/free-solid-svg-icons';
import {faStar as regularStarIcone} from '@fortawesome/free-regular-svg-icons';

import Dropdown from '../components/Dropdown';
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

        EQUIPMENT.push(
            <ul key={`equipments-${Data.id}`}>{equipments.map((data) => <li key={`myList-${data}`}>{data}</li>)}</ul>            
          );
       tags.forEach((data)=>{
        TAGS.push(<span className='badge-items' key={data}>{data}</span>)
       })

       pictures.forEach((data)=>{
        ImgCarrousel.push(<img src={data} key={data} alt={title} />)

       })

       // Show card       
       const NoteUser = rating;
       const star = [regularStarIcone,regularStarIcone,regularStarIcone,regularStarIcone,regularStarIcone]
       // remplit les premiers éléments du tableau star jusqua Note User 
       // 0 le remplissage commence du premier elements
       const result = star.fill(solidStarIcone ,0,NoteUser)
   
        
        return (
            <div>
                 {/* Carrousel */}
                 <section>
                    <div>                    
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
                                <Dropdown title="Descriptions" descriptions={description}  numberDropdown={1} />  
                            </div>
                            <div className="card-equipement">
                                <Dropdown title="Equipements" descriptions={EQUIPMENT}  numberDropdown={1} />
                            </div>
                        </div>
                    </section>             
                </div>
            </div>
        );
      
    
        
    

  
};


export default ViewCard;