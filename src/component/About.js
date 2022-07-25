import React from 'react';
import Nav from './Nav';
import '../css/About.css';
import profile from "../images/profile.png";
function About(props) {
    return (
        <div className="about_section">
            <Nav />
                    <div className='about_screen about_screen_one'>
                        {/* <p className='about_profile_text'>Artistic Developer</p> */}
                        <p className='about_profile_text'>
                            <span className='text1'>Ar</span>
                            <span className='text2'>ti</span>
                            <span className='text3'>st</span>
                            <span className='text4'>ic</span>
                            <span> </span>
                            <span className='text5'>de</span>
                            <span className='text6'>ve</span>
                            <span className='text7'>lo</span>
                            <span className='text8'>per</span>
                        </p>
                        <img src={profile} alt='profile' className='about_profile_img' />
                    </div>
                    <div className='about_screen about_screen_two'>2</div>
        </div>
    );
}

export default About;