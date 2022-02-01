const Footer = () => {
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
        <li className="right-sec"></li>
      </ul>
    </div>
  );
};

export default Footer;
