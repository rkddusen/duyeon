import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Sns from './Sns';
import '../css/Contact.css';
import n_logo from '../images/naver_logo.png';
import k_logo from '../images/kakaotalk_logo.png';
import i_logo from '../images/instagram_logo.png';
import g_logo from '../images/github_logo.png';
import t_logo from '../images/tistory_logo.png';
import y_logo from '../images/youtube_logo.png';
function Contact(props) {
    const sns = [
        {
            'name': 'naver',
            'image': n_logo,
            'link': 'email : k99endus@naver.com'
        },
        {
            'name': 'kakaotalk',
            'image': k_logo,
            'link': 'https://open.kakao.com/o/sjXBWYre'
        },
        {
            'name': 'instagram',
            'image': i_logo,
            'link': 'https://www.instagram.com/duyeon_0915/'
        },
        {
            'name': 'github',
            'image': g_logo,
            'link': 'https://github.com/rkddusen'
        },
        {
            'name': 'tistory',
            'image': t_logo,
            'link': 'https://kxxn2yxxn.tistory.com'
        },
        {
            'name': 'youtube',
            'image': y_logo,
            'link': 'https://www.youtube.com/channel/UC2hoTMEQRoLXsqdMks0ijvg'
        }
    ]
    return (
        <div className="contact_section">
            <Nav />
            <div className='contact_area'>
                <p>Contact</p>
                <div className='contact_sns'>
                    <div className='sns_left'>
                        <Sns
                            name={sns[0].name}
                            image={sns[0].image}
                            link={sns[0].link}
                        />
                    </div>
                    <div className='sns_right'>
                        <Sns
                            name={sns[1].name}
                            image={sns[1].image}
                            link={sns[1].link}
                        />
                    </div>
                </div>
                <div className='contact_sns'>
                    <div className='sns_left'>
                        <Sns
                            name={sns[2].name}
                            image={sns[2].image}
                            link={sns[2].link}
                        />
                    </div>
                    <div className='sns_right'>
                        <Sns
                            name={sns[3].name}
                            image={sns[3].image}
                            link={sns[3].link}
                        />
                    </div>
                </div>
                <div className='contact_sns'>
                    <div className='sns_left'>
                        <Sns
                            name={sns[4].name}
                            image={sns[4].image}
                            link={sns[4].link}
                        />
                    </div>
                    <div className='sns_right'>
                        <Sns
                            name={sns[5].name}
                            image={sns[5].image}
                            link={sns[5].link}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;