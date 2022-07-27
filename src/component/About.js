import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import '../css/About.css';
import profile from "../images/profile.png";
import career from "../images/career.jpg";
import hobby from "../images/hobby.jpg";
import skills from "../images/skills.png";
function About(props) {
    return (
        <div className="about_section">
            <Nav />
            <div className='about_area'>
                {/* <p className='about_profile_text'>Artistic Developer</p> */}
                <p>About me</p>
                <div className='about_title'>
                    <span>"</span>
                    <span className='text1'>Ar</span>
                    <span className='text2'>ti</span>
                    <span className='text3'>st</span>
                    <span className='text4'>ic</span>
                    <span> </span>
                    <span className='text5'>de</span>
                    <span className='text6'>ve</span>
                    <span className='text7'>lo</span>
                    <span className='text8'>per</span>
                    <span>"</span>
                </div>
                <div className='about_contents'>
                    <div className='profile'>
                        <img src={profile} alt='profile' className='detail_img' />
                        <div className='detail'>
                            <p className='detail_title'>
                                Profile
                            </p>
                            <p className='detail_text'>
                                <b>이름</b> : 강두연<br />
                                <b>성별</b> : 남자<br />
                                <b>생년월일</b> : 199.06.30 (나이 : 24세)<br />
                                <b>학력</b> : 건국대학교 재학 중<br />
                                <b>주소</b> : 경기도 성남시 분당구<br />
                                <b>좌우명</b> : ᶠᶸᶜᵏᵧₒᵤ 코딩
                            </p>
                        </div>
                    </div>
                    <div className='career'>
                        <div className='detail'>
                            <p className='detail_title'>Career</p>
                            <p className='detail_text'>
                                <b>2018.03</b> 건국대학교 소프트웨어학과 입학<br />
                                <b>2019.03 - 2020.02</b> 건국대학교 아마추어 오케스트라 동아리 16기 부회장<br />
                                <b>2019.07 - 2019.12</b> 2019년 sw활동 장학1<br />
                                <b>2020.05 - 2021.11</b> 육군 복무<br />
                                <b>2022.03 - xxxx.xx</b> 건국대학교 아마추어 오케스트라 동아리 홈페이지 제작<br />
                            </p>
                        </div>
                        <img src={career} alt='profile' className='detail_img' />
                    </div>
                    
                    <div className='skills'>
                        <img src={skills} alt='profile' className='detail_img' />
                        <div className='detail'>
                            <p className='detail_title'>Skills</p>
                            <p className='detail_text detail_right'>
                                C언어 <progress value="50" max="100"></progress><br />
                                C++ <progress value="10" max="100"></progress><br />
                                Java <progress value="50" max="100"></progress><br />
                                Python <progress value="50" max="100"></progress><br />
                                Html, css <progress value="80" max="100"></progress><br />
                                JavaScript <progress value="80" max="100"></progress><br />
                                React <progress value="50" max="100"></progress><br />
                                MySql <progress value="80" max="100"></progress><br />
                                Nodejs <progress value="70" max="100"></progress><br />
                            </p>
                        </div>
                        
                    </div>
                    <div className='hobby'>
                        
                        <div className='detail'>
                            <p className='detail_title'>Hobby</p>
                            <p className='detail_text'>
                                먹고<br />
                                눕고<br />
                                자고<br />
                                노는 거<br />
                            </p>
                        </div>
                        <img src={hobby} alt='profile' className='detail_img' />
                    </div>
                </div>
                {/* <div className='about_profile_explain about_aboutme'>
                    <div className='about_explain_img'><img src={aboutme} alt='img' /></div>
                    <div className='about_explain_detail'>
                        <strong>about me</strong>
                        <p>detail</p>
                    </div>
                </div>
                <div className='about_profile_explain about_career'>
                    <div className='about_explain_img'><img src={career} alt='img' /></div>
                    <div className='about_explain_detail'>
                        <strong>career</strong>
                        <p>detail</p>
                    </div>
                </div>
                <div className='about_profile_explain about_skills'>
                    <div className='about_explain_img'><img src={skills} alt='img' /></div>
                    <div className='about_explain_detail'>
                        <strong>skills</strong>
                        <p>detail</p>
                    </div>
                </div> */}
            </div>
            <Footer />
        </div>
    );
}

export default About;