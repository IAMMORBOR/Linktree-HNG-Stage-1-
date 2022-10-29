import './App.style.scss';
import Footer from './components/footer-section/footer.component';
import SocialMedia from './components/social.componet';
// import Li from './components/Links/Links.component';
import UserProfile from './components/Profile.component';
import MobileNav from './components/NavSection/MobileNav.component';
import DesktopNav from './components/NavSection/Desktop.component';
import LinkData from './components/Links/Links.component';

function App() {
  return (

   <section className='MainSection'>
      <nav className='MainSection-Nav'>
      <DesktopNav/>
        <MobileNav/>
      </nav>
      <section className='linktree-section'>
        <UserProfile/>
        <LinkData/>
      </section>
      <SocialMedia/>
      <div className='empty'></div>
      <Footer/>
   </section>
  );
}

export default App;
