import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import '../css/Main.css';
function Main(props) {
    return (
        <div className="main_section">
            <Nav />
            <div className='main_area'>
                
            </div>
            <Footer />
        </div>
    );
}

export default Main;