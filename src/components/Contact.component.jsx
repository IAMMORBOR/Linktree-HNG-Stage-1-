import "../App.style.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer-section/footer.component";
// import swal from "sweetalert";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [LastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setemail] = useState("");
  const [checkBox, setCheckbox] = useState(false);
  const [error, seterror] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async () => {
    if(userName === "" || LastName === "" || message === "" || checkBox === false || email === ""){
        seterror(true)
    }else{
        alert("Your message was successfully submitted")
        navigate("/")
    }
 
  };
  

  return (
    <section className="Contact-section">
      <div className="Contact-section--containner">
            <div className="Contact-section--heading__containner">
                <div className="Contact-section--heading">Contact me</div>
                <p className="Contact-section--text">
                    Hi there, contact me to ask me about anything you have in mind.
                </p>
            </div>
            <div className="form-section">
                <div className="name-section">
                    <label id="first_name--label"> First Name 
                        <input id="first_name"
                            type="text"
                            placeholder="Enter your first Name"
                            onChange={(e) => {
                            setUserName(e.target.value);}}
                        />
                          {error && <div className="error-msg">Please enter your First Name</div>}
                     
                    </label>
                  
                    <label id="last_name--label">Last Name <br />
                        <input
                            id="last_name"
                            type="text"
                            placeholder="Enter your last Name"
                            onChange={(e) => {
                            setLastName(e.target.value);}}
                        />
                         {error && <div className="error-msg">Please enter your Last Name</div>}
                    </label>
                </div>
                <label id="email--label"> Email 
                    <input
                        id="email"
                        type="email"
                        placeholder="Yourname@email.com"
                        onChange={(e) => {
                         setemail(e.target.value);}}
                    />
                   {error && <div className="error-msg">Please enter your email</div>}
               </label>
                
                <label id="message--label"> Massage <br/>
                    <textarea 
                        id="message"
                        rows="720px"
                        cols="132px"
                        name="comment"
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                        onChange={(e) => {
                        setMessage(e.target.value);}}
                    />
                </label>
                {error && <div className="error-msg--message">please enter message</div>}
                <input id="checkbox"
                    type="checkbox"
                    onChange={(e) => {
                    setCheckbox(true);}}
                    required
                />
                 <label id="checkbox--label" htmlFor="checkbok">You agree to providing your data to morbor who may contact you.</label>
                <button id="btn__submit" onClick={handleSubmit}>
                    Send message
                </button>
            </div>
        </div>
      <div className="empty"></div>
      <Footer />
    </section>
  );
};
export default Contact;
