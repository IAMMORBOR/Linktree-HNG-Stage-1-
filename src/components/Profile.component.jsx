import ProfilePicture from '../image-container/Profileimg.png';

const UserProfile=()=>{
    return(
        <div id='profile'>
             <img id='profile__img' src={ProfilePicture}alt='profile__img'/>
        <h4 id='profile--userName'>datgirlMORBOR</h4>
      </div>
    )
}
export default UserProfile;