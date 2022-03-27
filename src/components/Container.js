import React, { useEffect, useState } from "react";
import Footer from "./common/footer";
import { GET_LAYOUT_URL, GET_LOGO_URL } from "../constants/Constants";
import Header from "./common/header/Header";
import "./container.css";
import { Link } from "react-router-dom";
const Container = ({ children, title, buttonTitle }) => {
  const [logo, setLogo] = useState("");
  const [layout, setLayout] = useState({});
  const fetchFooterData = () => {
    Promise.all([GET_LAYOUT_URL, GET_LOGO_URL])
      .then(([res1, res2]) => {
        if (res1.status === 200 && res2.status === 200) {
          console.log(res1, res2, "res2");
          setLayout({ ...res1.data.data });
          setLogo(res2.config.url);
        }
      })
      .catch((error) => console.log(error.response));
  };
  useEffect(() => {
    fetchFooterData();
  }, []);
  return (
    <>
      <Header logo={logo} />
      <div style={{
        marginTop:"115px"}}>
        <div className="table-title-and-button-container">
          <> {title && <h2>{title}</h2>}</>
          <>
            {buttonTitle && (
              <Link className="add-contact-button-in-table" to="/">
                {buttonTitle}
              </Link>
            )}
          </>
        </div>
        {children}
      </div>
      <Footer logo={logo} layout={layout} />
    </>
  );
};

export default Container;
