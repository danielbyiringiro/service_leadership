import UniGhanaLogo from '../assets/unighana.png'
import FacebookLogo from '../assets/facebook_icon.png'
import WhatsappLogo from '../assets/whatsapp_icon.png'
import YoutubeLogo from '../assets/youtube_icon.png'

export default () =>
{
    return(
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
    )
}