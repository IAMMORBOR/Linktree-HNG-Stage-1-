import logo1 from '../../image-container/logo1.png'
import zuriLogo from '../../image-container/zuriLogo.png'
import '../../../src/App.style.scss';
const Footer=()=>{
    return(
    <footer className='footer-section'>
      <img className='footer-section--logo' src={zuriLogo} alt='slack--icon'/>
      <p className='footer-section-text'>HNG Internship 9 Frontend Task</p>
      <img className='footer-section--Ingressivelogo' src={logo1} alt='slack--icon'/>
    </footer>

    )
}
export default Footer;