import './App.style.scss';
import ProfilePicture from './image-container/Profileimg.png';
import logo1 from './image-container/logo1.png';
import zuriLogo from './image-container/zuriLogo.png';
import slack from './image-container/slack.png';
import SocialLink from './Button-component/link.component';
import {BsGithub} from 'react-icons/bs';
import {HiOutlineDotsCircleHorizontal} from 'react-icons/hi';
import {MdOutlineDarkMode} from 'react-icons/md';



function App() {
  return (

   <section className='MainSection'>
    <nav className='MainSection-Nav'>
      <div className='MainSection-Nav--desktop'>
        <MdOutlineDarkMode className='MainSection-Nav--icon'/>
      </div>
      <div className='MainSection-Nav--mobile'>
      <HiOutlineDotsCircleHorizontal className='MainSection-Nav--icon' />
      </div>
    </nav>
    <section className='linktree-section'>
      <div id='profile'>
        <img id='profile__img' src={ProfilePicture}alt='profile__img'/>
        <h4 id='profile--userName'>datgirlMORBOR</h4>
      </div>
      <div className='button-section' >
        <SocialLink btntype ='zuri' link='https://twitter.com/IAMMORBOR'>Twitter Link</SocialLink>
        <SocialLink btntype ='btn_zuri' link='https://training.zuri.team/'>Zuri Team</SocialLink>
        <SocialLink btntype ='Books' link='http://books.zuri.team'>Zuri Books</SocialLink>
        <SocialLink btntype ='books_python' link='https://books.zuri.team/'>Python Books </SocialLink>
        <SocialLink btntype ='Pitch' link='https://background.zuri.team'>Background check for Coders</SocialLink>
        <SocialLink btntype ='book_design' link='https://books.zuri.team/design-rules'>Design Books</SocialLink>
      </div>
    </section>
    <section className='SocialMedia-section'>
   
    <a href='urltoslack'>
     <img className='SocialMedia-section--slack' src={slack} alt='slack--icon'/>
      </a>
      <a href='https://github.com/IAMMORBOR'>
        <BsGithub className='SocialMedia-section--github' />
      </a>
      
    </section>
    <div className='empty'></div>
    <footer className='footer-section'>
      <img className='footer-section--logo' src={zuriLogo} alt='slack--icon'/>
      <p className='footer-section-text'>HNG Internship 9 Frontend Task</p>
      <img className='footer-section--Ingressivelogo' src={logo1} alt='slack--icon'/>
    </footer>
   </section>
  );
}

export default App;
