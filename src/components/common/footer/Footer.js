import axios from "axios";
import React, { useEffect, useState } from "react";
import { LAYOUT_END_POINT } from "../../../constants/Constants";
import "./footerStyle.css"

const Footer = () => {
  const [logo, setLogo] = useState("")
  const[layout,setLayout]=useState({})
  console.log(logo, "logo");
  const logoImage = () => {
      Promise.all(LAYOUT_END_POINT)
        .then(([res1, res2]) => {
          if (res1.status===200&&res2.status === 200) {
            console.log(res1,res2, "res2");
            setLayout(res1.data)
            setLogo(res2.config.url);
            
          }
        })
.catch((error)=>console.log(error.response))  }

  useEffect(() => {
  logoImage()
  },[])
  return (
    <div className="footer-container">
      <img
        className="logo"
        src={logo}
        alt="img"
        crossOrigin="anonymous"
      />
    </div>
  );
};

export default Footer;
