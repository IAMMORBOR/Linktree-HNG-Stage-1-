import './Button.style.scss';


const SocialLink=(props)=>{

    return(

        <a className={`btn ${'btn__'+props.btntype}`} href={props.link}> {props.children}</a>
    )
}
export default SocialLink;



