import './link.style.scss';


const SocialLink=(props)=>{

    return(

        <a className={`btn ${'btn__'+props.btnid}`} href={props.link}> {props.children}</a>
    )
}
export default SocialLink;



