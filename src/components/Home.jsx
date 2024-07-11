import './Home.css'
import UniGhanaLogo from '../assets/unighana.png'
import FacebookLogo from '../assets/facebook_icon.png'
import WhatsappLogo from '../assets/whatsapp_icon.png'
import YoutubeLogo from '../assets/youtube_icon.png'
import HomeImage from '../assets/home_image.png'
import Ashesi from '../assets/ashesi.png'
import KNUST from '../assets/knust.png'
import Legon from '../assets/legon.png'
import Academic from '../assets/academic_city.png'
import BottomImage from '../assets/botton_image.png'
import BelowImage from '../assets/below_image.png'
import { Link } from "react-router-dom"
import Header from './Header'

export default () =>
    {
        return(
            <>
            <div>
                <Header/>
                <div className='Middle'>
                    <div className='image-container'>
                        <img src={HomeImage}/>
                        <div className='overlay-text'>
                            <p id="middle_text_first">Higher Education</p>
                            <p id="middle_text_second">-at your doorstep</p>
                            <p id="middle_text_third">Explore your future with us now. No more waiting.</p>
                            <button id="middle_button">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className='Last'>
                    <p id="last_first">Find the university of your dreams</p>
                    <div className='university-grid'>
                        <div className='university-card ashesi'>
                            <Link className="university-name" to="/ashesi">Ashesi University</Link>
                            <p className="university-description">Explore Ashesi University with us now. From its campus to programs offered.</p>
                            <img src={Ashesi} alt="Ashesi University" />
                        </div>
                        <div className='university-card knust'>
                            <Link className="university-name" to="/knust">Kwame Nkrumah University of Science and Technology</Link>
                            <p className="university-description">Explore KNUST, the region of Gold with us now. From its campus to programs offered.</p>
                            <img src={KNUST} alt="KNUST" />
                        </div>
                        <div className='university-card academic'>
                            <Link className="university-name" to="/academic">Academic City University College</Link>
                            <p className="university-description">Explore Academic City with us now. From its campus to programs offered.</p>
                            <img src={Academic} alt="Academic City" />
                        </div>
                        <div className='university-card legon'>
                            <Link className="university-name" to="/legon">University of Ghana</Link>
                            <p className="university-description">Explore the premier university with us now. From its campus to programs offered.</p>
                            <img src={Legon} alt="University of Ghana" />
                        </div>
                    </div>
                    <p id="see_more">See More Universities {'>'}{'>'}{'>'}</p>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        <p id="head">Get Funded Now</p>
                        <p>Your path to tertiary education is clearer</p>
                        <p>than ever. Explore the numerous scholarships</p>
                        <p>available now.</p>
                        <button id="bottom_button">See More</button>
                    </div>
                    <div className='right'>
                        <img id="image_bottom" src={BottomImage}/>
                    </div>
                </div>
                <div className='below'>
                    <div className='left'>
                        <p id="head">Excited about university?</p>
                        <button id="below_button">Join our community</button>
                    </div>
                    <div className='right'>
                        <img id="image_below" src={BelowImage}/>
                    </div>
                </div>
                <div className='footer'>
                    <div className='footer_logo'>
                        <img id="footer_image" src={UniGhanaLogo} className='logo'/>
                        <p id="footer_text">UniGhana</p>
                    </div>
                    <p id="first" className='footer_paragraph'>Sources</p>
                    <p className='footer_paragraph'>About Us</p>
                    <p className='footer_paragraph'>Terms and Conditions</p>
                    <div className='media'>
                        <img id="first_logo" src={FacebookLogo} className='icon'/>
                        <img src={WhatsappLogo} className='icon'/>
                        <img src={YoutubeLogo} className='icon'/>
                    </div>
                </div>
            </div>
            </>
        )
    }