import "./footerStyle.css";

const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="company-name-logo">
        <img
          className="logo"
          src={props.logo}
          alt="img"
          crossOrigin="anonymous"
        />
      </div>

      <div className="footer-elements">
        <div>
          <div className="EC-section">
            <h5 className="EC-section-heading">Company</h5>
            <p className="EC-section-paragraph">Engineers-Cradle</p>
          </div>
          <div className="version-section">
            <h5 className="version-section-heading">Version</h5>
            <p className="version-section-paragraph">{props.layout?.version}</p>
          </div>
        </div>

        <div className="status-section-container">
          <div className="status-section">
            <h5 className="status-section-heading">Status</h5>
            <p className="status-section-paragraph">{props.layout?.Status}</p>
          </div>
          <div className="status-icon">
            <p className="status-icon-paragrapgh">{props.layout?.Icon}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
