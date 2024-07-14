import Signin from "./Signin"
import UniGhanaLogo from '../assets/unighana.png'
import Search from '../assets/search.png'

import { Link } from "react-router-dom"

export default () =>
{
    return(
        <div className='Header'>
            <div className='div_logo'>
                <img src={UniGhanaLogo} className='logo'></img>
                <p id="logo_text">UniGhana</p>
            </div>
            <div className='header_middle'>
                <Link className='link' to='/home'>Home</Link>
                <Link className='link' to='/academic'>University Search</Link>
                <Link className='link' to="/scholarship">Scholarships</Link>
                <Link className='link' to="/gallery">Gallery</Link>
            </div>
            <div className='header_last'>
                 <img src={Search} className='search'></img>
                <p className="link" id="login_text"><Signin/></p>
            </div>
        </div>
    )
}