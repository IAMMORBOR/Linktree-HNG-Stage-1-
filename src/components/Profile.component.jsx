import ProfilePicture from '../image-container/Profileimg.png';

const UserProfile=()=>{
    return(
        <div id='profile'>
            <img id='profile__img' src={ProfilePicture}alt='profile__img'/>
            <p id='slack'>Morbor</p>
            <h4 id='twitter'>datgirlMORBOR</h4>
        </div>

    )
}
export default UserProfile;