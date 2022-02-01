// Importing thing we need
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Main function
const Navbar = () => {
  // Variables
  const mobileWidth = 768;
  const [showMenuButton, setShowMenuButton] = useState(null);
  const [showMenu, setShowMenu] = useState(null);

  // Functions

  const toggleMenu = () => setShowMenu(!showMenu);

  // Life cycle
  useEffect(() => {
    if (window.innerWidth < mobileWidth) setShowMenuButton(true);
    window.addEventListener("resize", function () {
      if (window.innerWidth < mobileWidth) setShowMenuButton(true);
      else setShowMenuButton(false);
    });
  }, []);

  // Returning jsx
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <li className="logo">ajjlal ahmed</li>
        {!showMenuButton && (
          <>
            <li className="nav-item">
              <Link to="/">home</Link>
            </li>
            <li className="nav-item">
              <Link to="about">about</Link>
            </li>
            <li className="nav-item">
              <a
                href={`${process.env.PUBLIC_URL}/assets/downloads/resume.pdf`}
                download
              >
                <i className="fa fa-download" aria-hidden="true"></i>resume
              </a>
            </li>
          </>
        )}
        {showMenuButton && (
          <li className="menu">
            <div onClick={toggleMenu} className="bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            {showMenu && (
              <ul className="mob-nav">
                <li className="nav-item">
                  <Link onClick={toggleMenu} to="/">
                    home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={toggleMenu} to="about">
                    about
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href={`${process.env.PUBLIC_URL}/assets/downloads/resume.pdf`}
                    download
                  >
                    <i className="fa fa-download" aria-hidden="true"></i>resume
                  </a>
                </li>
              </ul>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};
// Exporting function
export default Navbar;
