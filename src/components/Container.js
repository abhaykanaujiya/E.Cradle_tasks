import React from "react";
import Footer from "./common/footer";
import Header from "./common/header";
import { toast, ToastContainer } from "react-toastify";

const Container = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ToastContainer position="top-center" />
    </>
  );
};

export default Container;
