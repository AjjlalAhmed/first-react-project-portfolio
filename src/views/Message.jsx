/* eslint-disable jsx-a11y/alt-text */
// Importing thing we need
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";

// Main function
const Message = () => {
  // Variables
  const { search } = useLocation();
  const { imgName, message } = queryString.parse(search);

  //   Returning jsx
  return (
    <div className="message">
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/${imgName}`}
        className="img"
      />
      <p className="message-text">{message}</p>
      <Link to="/">go back</Link>
    </div>
  );
};

export default Message;
