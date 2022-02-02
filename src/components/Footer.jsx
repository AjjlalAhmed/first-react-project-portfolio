// Importing thing we need
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Main function
const Footer = () => {
  // Variables
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Functions
  const submit = async (e) => {
    // Preventing browser to reload
    e.preventDefault();
    // Checking if inputs is empty
    if (email === "") return;
    if (message === "") return;

    try {
      // Creating request header
      const header = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          message: message,
        }),
      };
      // Creating request
      const response = await fetch(
        "https://formsubmit.co/ajax/ajjlalahmed48@gmail.com",
        header
      );
      // Parsing data
      const data = await response.json();
      // Removing input values
      setMessage("");
      setEmail("");

      // Checking status
      if (data.success === "true") {
        // Changing route
        navigate(`/message?imgName=message-sent.svg&message=${data.message}`);
      } else {
        // Changing route
        navigate(`/message?imgName=message-fail.svg&message=${data.message}`);
      }
    } catch (error) {
      // Removing input values
      setMessage("");
      setEmail("");
      // Changing route
      navigate(`/message?imgName=message-fail.svg&message=${error.message}`);
    }
  };

  // Returning jsx
  return (
    <div className="footer">
      <ul>
        <li className="left-sec">
          <h1 className="footer-title">ajjlal ahmed</h1>
          <p className="email">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            ajjlalahmed48@gmail.com
          </p>
          <div className="links">
            <a
              href="https://github.com/AjjlalAhmed"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.fiverr.com/ajjlal_ahmed"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/ficon.png`}
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ajjlalahmed/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </li>
        <li className="right-sec">
          <h1 className="footer-title">contact me</h1>
          <form onSubmit={submit} className="form">
            <div className="form-control">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                value={email}
                autoComplete="on"
              />
            </div>
            <div className="form-control">
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message..."
                value={message}
              ></textarea>
            </div>
            <div className="form-control">
              <button className="send-email">
                <i className="fa fa-paper-plane" aria-hidden="true"></i>send
              </button>
            </div>
          </form>
        </li>
      </ul>
    </div>
  );
};
// Exporting function
export default Footer;
