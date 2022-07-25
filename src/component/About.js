import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
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
            <div className='about_screen about_screen_two'>
                <div className='about_profile_explain about_aboutme'>
                    <div className='about_explain_img'><img src='' alt='img' /></div>
                    <div className='about_explain_detail'>
                        <strong>about me</strong>
                        <p>detail</p>
                    </div>
                </div>
                <div className='about_profile_explain about_career'>
                    <div className='about_explain_img'><img src='' alt='img' /></div>
                    <div className='about_explain_detail'>
                        <strong>career</strong>
                        <p>detail</p>
                    </div>
                </div>
                <div className='about_profile_explain about_skills'>
                    <div className='about_explain_img'><img src='' alt='img' /></div>
                    <div className='about_explain_detail'>
                        <strong>skills</strong>
                        <p>detail</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;