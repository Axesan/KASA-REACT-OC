import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container content_not_found'>
           <h1>404</h1>
           <span>Oups ! La page que vous demandez n'existe pas</span><br />
           <Link to={'/'}>Retourner sur la page d'accueil</Link>
        </div>
    );
};

export default NotFound;