import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Main function
const Footer = () => {
  // Variables
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Functions
  const submit = (e) => {
    e.preventDefault();
    if (email === "") return;
    if (message === "") return;

    // https://github.com/github/fetch
    fetch("https://formsubmit.co/ajax/ajjlalahmed48@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage("");
        setEmail("");
        window.scrollTo(0, 0)
        navigate(`/message?imgName=message-sent.svg&message=${data.message}`);
      })
      .catch((error) => {
        setMessage("");
        setEmail("");
        window.scrollTo(0, 0)
        navigate(`/message?imgName=message-fail.svg&message=${error.message}`);
      });
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
              <button className="send-email">send</button>
            </div>
          </form>
        </li>
      </ul>
    </div>
  );
};
// Exporting function
export default Footer;
