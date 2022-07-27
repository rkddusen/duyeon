import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import '../css/Portfolio.css';
import PortContents from './PortContents';
function Portfolio(props) {
    const portfolio = [
        {
            'name': 'Kuphil Web',
            'image': '',
            'link': 'https://www.kuphil.com',
            'details': '쿠필 웹입니다.'
        },
        {
            "name": "Duyeon's Web",
            "image": "",
            "link": "https://www.duyeon.com",
            "details": "강두연 포트폴리오 웹입니다."
        },
        {
            "name": "준비 중",
            "image": '',
            "link": '',
            "details": "준비 중"
        }
    ]
    return (
        <div className="portfolio_section">
            <Nav />
            <div className='portfolio_area'>
                <p>Portfolio</p>
                <div className='portfolio_contents'>
                    <div className='contents_row'>
                        <PortContents
                            name={portfolio[0].name}
                            image={portfolio[0].image}
                            link={portfolio[0].link}
                            details={portfolio[0].details} />
                        <PortContents
                            name={portfolio[1].name}
                            image={portfolio[1].image}
                            link={portfolio[1].link}
                            details={portfolio[1].details} />
                    </div>
                    <div className='contents_row'>
                        <PortContents
                            name={portfolio[2].name}
                            image={portfolio[2].image}
                            link={portfolio[2].link}
                            details={portfolio[2].details} />
                            
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Portfolio;