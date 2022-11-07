import "../App.style.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer-section/footer.component";


const Contact = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setemail] = useState("");
  const [checkBox, setCheckbox] = useState(false);
  const [error, seterror] = useState(true);
  const [successMsg, setSuccessMsg] = useState(false);
  const [FirstNameError, setFirstNameError]=useState(false);
  const [LastNameError, setLastNameError]=useState(false);
  const [messageError, setMessageError]=useState(false);
  const [emailError, setEmailerror]=useState(false);
  const navigate = useNavigate();

  var pattern =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(FirstName === ""){
        setFirstNameError(true)
    }else if(LastName === ""){
        setLastNameError(true)
    }else if(email === "" || email != email.match(pattern)){
        setEmailerror(true)
    }else if(message === ''){
        setMessageError(true)
    }else if (checkBox === false){
        seterror(true)
    }else{
        setSuccessMsg(true);
    }
  };
  const checkHandler = ()=> {
    setCheckbox(!checkBox)
  }
  const HandleSuccessMsg =()=>{
    navigate("/")
  }
  return (
    <section className="Contact-section">
      <div className="Contact-section--containner">
            <div className="Contact-section--heading__containner">
                <div className="Contact-section--heading">Contact me</div>
                <p className="Contact-section--text">
                    Hi there, contact me to ask me about anything you have in mind.
                </p>
            </div>
            <form className="form-section">
                <div className="formField--section">
                    <label id="first_name--label"> First Name 
                        <input id="first_name"
                            type="text"
                            placeholder="Enter your first Name"
                            required
                            onChange={(e) => {
                            setFirstName(e.target.value);}}
                        />
                         {FirstNameError && <div className="error-msg">Please enter your First Name</div>}
                    </label>
                    <label id="last_name--label">Last Name <br />
                        <input
                            id="last_name"
                            type="text"
                            placeholder="Enter your last Name"
                            required
                            onChange={(e) => {
                            setLastName(e.target.value);}}
                        />
                         {LastNameError && <div className="error-msg">Please enter your Last Name</div>}
                    </label>
                </div>
                <label id="email--label"> Email 
                    <input
                        id="email"
                        type="email"
                        placeholder="Yourname@email.com"
                        required
                        onChange={(e) => {
                         setemail(e.target.value);}}
                    />
                   {emailError && <div className="error-msg">Please enter valid email</div>}
               </label>
                
                <label id="message--label"> Massage <br/>
                    <textarea 
                        id="message"
                        rows="720px"
                        cols="132px"
                        name="comment"
                        required
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                        onChange={(e) => {
                        setMessage(e.target.value);}}
                    />
                </label>
                {messageError && <div className="error-msg--message">please enter message</div>}
                <input id="checkbox"
                    type="checkbox"
                    checked={checkBox}
                    onChange={checkHandler}
                    required
                />
                 <label id="checkbox--label" htmlFor="checkbok">You agree to providing your data to morbor who may contact you.</label>
                 {error && <div className="error-msg--checkbox">checkbok should be clicked </div>}
                <button id="btn__submit" onClick={handleSubmit}>
                    Send message
                </button>
            </form>
        </div>
      <div className="empty"></div>
      <Footer />
      {successMsg ? <div className="successMessage">
        <h4 className="successMessage--text">
        Thank You!
        </h4>
        <p className="successMessage--subtext">Message delivered successfully.</p>
        <button className="successMessage--btn" onClick={HandleSuccessMsg}>ok</button>
      </div> : ""}
      
    </section>
  );
};
export default Contact;
