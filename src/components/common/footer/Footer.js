import "./footerStyle.css";

const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="footer-body">
        <div className="company-name-logo">
          <img
            className="logo"
            src={props.logo}
            alt="img"
            crossOrigin="anonymous"
          />
        </div>

        <div className="footer-elements">
          <div className="status-section-container">
            <div className="status-icon">
              <p className="status-section-paragraph">{props.layout?.Status}</p>
              <p className="status-icon-paragrapgh">{props.layout?.Icon}</p>
            </div>
          </div>

          <div>
            <div className="name-section-EC">
              <p className="status-section-paragraph">Engineers-Cradle</p>
            </div>
            <div className="version-section">
              <p className="version-section-paragraph">
                {props.layout?.version}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
