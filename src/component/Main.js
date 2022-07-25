import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import '../css/Main.css';
function Main(props) {
    return (
        <div className="main_section">
            <Nav />
                    <div className='main_screen main_screen_one'>1</div>
                    <div className='main_screen main_screen_two'>2</div>
                    <div className='main_screen main_screen_three'>3</div>
                    <div className='main_screen main_screen_four'>4</div>
        </div>
    );
}

export default Main;