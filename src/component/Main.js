import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import '../css/Main.css';
import { FullPage, Slide } from 'react-full-page';
function Main(props) {
    return (
        <div className="main_section">
            <Nav />
            <FullPage controls controlsProps={{ className: 'main_slide' }}>
                <Slide>
                    <div className='main_screen main_screen_one'>1</div>
                </Slide>
                <Slide>
                    <div className='main_screen main_screen_two'>2</div>
                </Slide>
                <Slide>
                    <div className='main_screen main_screen_three'>3</div>
                </Slide>
                <Slide>
                    <div className='main_screen main_screen_four'>4</div>
                </Slide>
            </FullPage>

        </div>
    );
}

export default Main;