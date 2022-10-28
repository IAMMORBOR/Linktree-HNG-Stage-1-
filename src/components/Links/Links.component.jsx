import SocialLink from "./link.component";

const Links =()=>{
    return(
        <div className='Links-section' >
        <SocialLink btnid ='zuri' link='https://twitter.com/IAMMORBOR'>Twitter Link</SocialLink>
        <SocialLink btnid ='btn_zuri' link='https://training.zuri.team/'>Zuri Team</SocialLink>
        <SocialLink btnid ='Books' link='http://books.zuri.team'>Zuri Books</SocialLink>
        <SocialLink btnid ='books_python' link='https://books.zuri.team/'>Python Books </SocialLink>
        <SocialLink btnid ='Pitch' link='https://background.zuri.team'>Background check for Coders</SocialLink>
        <SocialLink btnid ='book_design' link='https://books.zuri.team/design-rules'>Design Books</SocialLink>
      </div>

    )
}
export default Links;