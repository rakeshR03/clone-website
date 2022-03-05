import React from 'react';
import './card.css';

export default function Card(props){
    const title = props.value.title;
    const desc = props.value.description;
    return(
        <div className='card-container'>
            <div className="title-container">
                <h2>{title}</h2>
            </div>
            <div className='desc-container'>
                <p>{desc}</p>    
            </div>
        </div>
    );
}