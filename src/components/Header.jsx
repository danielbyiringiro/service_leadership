import Signin from "./Signin"
import UniGhanaLogo from '../assets/unighana.png'
import { Link } from "react-router-dom"

export default () =>
{
    return(
        <div className='Header'>
            <div className='div_logo'>
                <img src={UniGhanaLogo} className='logo'></img>
                <Link to="/" id="logo_text">UniGhana</Link>
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
    )
}