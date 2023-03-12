import React from 'react';
import { Link } from 'react-router-dom';




const Card = (props) => {
    return (
        <Link to={`views/${props.title.replace(/\s/g,"-")}/${props.id}`} className="card_link">
            <div className='card'>
                <img src={props.picture} alt={props.title} className="picture_card" />
                <span>{props.title}</span>         
            </div>
        </Link>
    );
};

export default Card;