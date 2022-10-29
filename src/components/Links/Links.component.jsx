import DATA from "../../DATA/Data.js";
import './link.style.scss';

const LinkData =()=>{

  return (
    <div className="Links-section">
      {DATA.map((socialLink)=>{
        return (
          <div key={socialLink.key}>
            <a className="Data-links" href={socialLink.linkTo} id={socialLink.linkID}>{socialLink.linkText}
            <span className="tooltip">
              <div className="tooltip--heading">
               <b> {socialLink.HoverTextHeading}</b>
              </div>
              <div className="tooltip--Body">
                 {socialLink.HoverText}
              </div>
            </span>
            </a>
          </div>
        )
      })}
    </div>

  );
}
export default LinkData;