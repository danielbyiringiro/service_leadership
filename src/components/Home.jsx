import './Home.css'
import UniGhanaLogo from '../assets/unighana.png'
import { Link } from "react-router-dom"
import Signin from './Signin'

export default () =>
    {
        return(
            <>
            <div>
                <div className='Header'>
                    <div className='div_logo'>
                        <img src={UniGhanaLogo} className='logo'></img>
                        <p id="logo_text">UniGhana</p>
                    </div>
                    <div className='header_middle'>
                        <Link className='link' to='/universitysearch'>University Search</Link>
                        <Link className='link' to="/scholarship">Scholarships</Link>
                        <Link className='link' to="/gallery">Gallery</Link>
                    </div>
                    <div className='header_last'>
                        <p className="link" id="login_text"><Signin/></p>
                    </div>
                </div>
                <div className='Middle'>
                    <p>Picture</p>
                    <p>Higher Education at your doorstep</p>
                    <p>Ensure your future with us no more waiting</p>
                    <button>Get Started</button>
                </div>
                <div className='Last'>
                    <p>Find the university of your dream</p>
                    <p>Ashesi</p>
                    <p>KNUST</p>
                    <p>Legon</p>
                    <p>Academic City</p>
                </div>
            </div>
            </>
        )
    }