import ProfilePicture from '../image-container/Profileimg.png';
import {BsTwitter}from 'react-icons/bs'

const UserProfile=()=>{
    return(
        <div id='profile'>
            <img id='profile__img' src={ProfilePicture}alt='profile__img'/>
            <p className="slack" id='slack'>Morbor</p>
            <div id='profile--twitter-section'>
                <BsTwitter id='profile--twitter-section--icon'/>
                <h4 id='twitter'>@datgirlMORBOR</h4>
            </div>
      </div>
    )
}
export default UserProfile;