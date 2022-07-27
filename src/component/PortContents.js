import React from 'react';
import '../css/Portfolio.css';

function PortContents(props) {
    const alt = props.name === '준비 중' ? props.name : props.name + ' 썸네일 준비 중';
    return (
        <>
            <div className='portfolio_box'>
                    <div className='portfolio_img'>
                        <img src={props.image} alt={alt} />
                    </div>
                    <div className='portfolio_explain'>
                        <strong>{props.name}</strong>
                        <p>{props.details}</p>
                    </div>
                </div>
        </>
    );
}

export default PortContents;