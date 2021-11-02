import "./contact.scss";
import {useState} from "react";
const Contact = () => {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault()
        setMessage(true);
    }
  return (
    <div className="contact" id="contact">
      <div clas="left">
        <img src="images/a.png" alt="new" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          {message && <span>Thanks, I will reply soon.</span>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
