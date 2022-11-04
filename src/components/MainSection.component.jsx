import '../App.style.scss';
import Footer from './footer-section/footer.component';
import SocialMedia from "./social.componet";
import UserProfile from './Profile.component';
import MobileNav from './NavSection/MobileNav.component';
import DesktopNav from './NavSection/Desktop.component';
import LinkData from './Links/Links.component';

const MainSection =()=>{
    return(
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
    )
}
export default MainSection;