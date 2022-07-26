import React from 'react';
import '../css/Sns.css';
function Sns(props) {
    // let className = 'sns_image ';
    // className += props.name;
    return (
        <>
            <img src={props.image} alt={props.name} className='sns_image'/>
            <div className='sns_text'>
                <a href={props.link} className={props.name} target='_blank' rel='noopener noreferrer'>{props.link}</a>
            </div>
        </>
    );
}

export default Sns;