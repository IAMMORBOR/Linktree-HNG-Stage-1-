import slack from '../image-container/slack.png';
import {BsGithub} from 'react-icons/bs';

const SocialMedia=()=>{
    return(
        <section className='SocialMedia-section'>
        <a href='/static/media/slack.6fa75d08a444264c64393c623e71c055.svg'>
         <img className='SocialMedia-section--slack' src={slack} alt='slack--icon'/>
          </a>
          <a href='https://github.com/IAMMORBOR'>
            <BsGithub className='SocialMedia-section--github' />
          </a>
          
        </section>
    )
}
export default SocialMedia;