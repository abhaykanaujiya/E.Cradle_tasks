import React, { useEffect ,useState} from "react";
import Footer from "./common/footer";
import{ GET_LAYOUT_URL, GET_LOGO_URL } from "../constants/Constants"
import { toast, ToastContainer } from "react-toastify";


const Container = ({ children }) => {
    const [logo, setLogo] = useState("");
    const [layout, setLayout] = useState();
    const logoImage = () => {
      Promise.all([GET_LAYOUT_URL, GET_LOGO_URL])
        .then(([res1, res2]) => {
          if (res1.status === 200 && res2.status === 200) {
            console.log(res1, res2, "res2");
            setLayout(res1.data.data);
            setLogo(res2.config.url);
          }
        })
        .catch((error) => console.log(error.response));
    };
  useEffect(() => {
    logoImage();
  },[])
  return (
    <>
      {/* <ToastContainer position="top-center"  /> */}
      {/* <Header /> */}
      {children}
      <Footer logo={logo} layout={layout} />
    </>
  );
};

export default Container;
