import React from "react";
import Footer from "./common/footer";
import Header from "./common/header";
import { toast, ToastContainer } from "react-toastify";


const Container = ({ children }) => {
  return (
    <>
      {/* <ToastContainer position="top-center"  /> */}
      {/* <Header /> */}
      {children}
      <Footer />
    </>
  );
};

export default Container;
