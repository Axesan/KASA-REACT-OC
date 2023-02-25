import React from 'react';

const Bannerapropos = (props) => {
    return (
        <div className='banner-apropos'>
            <img src={props.picture} alt={props.title} className="picture_card" />
        </div>
    );
};

export default Bannerapropos;