import axios from "axios";
import React, { useState } from "react";
import InputField from "../common/input";
import "./credential.css";
import { post_url } from "../../constants/Constants";
import {  toast } from "react-toastify";
import Validate from "../validation";

export const Credential = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [jobstatus, setJobStatus] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [secret, setSecret] = useState("");
  const [error, setError] = useState({ type: "", msg: "", status: false });

  const options = [
    { value: " Select job status", label: " Select job status" },
    { value: "Unemployed", label: "Unemployed" },
    { value: "Working", label: "Working" },
    { value: "Student", label: "Student" },
    { value: "Retired", label: "Retired" },
  ];
  const handleName = (e) => {
    setName(e.target.value);
    console.log(name, "name");
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    console.log(address, "address");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email, "email");
  };

  const handleCheckBox = () => {
    setCheckBox(true);
  };

  const handleUniqueCode = (e) => {
    setSecret(e.target.value);
  };
  const handleDropDown = (e) => {
    setJobStatus(e.target.value);
  };
  const handleSubmit = () => {
    const result = Validate(name, address, email, jobstatus, checkBox, secret);
    if (!result?.status) {
      console.log(result,"result");
      setError(result);
        // toast(error.msg || "Users details are not correct!");
    } else {

      setError({ type: "", msg: "", status: true });
            console.log(error,"error");
      const add = {
        Name: name,
        Address: address,
        Email: email,
        JobStatus: jobstatus,
        DoLiketoCode: checkBox,
        Secret: secret,
      };
      axios
        .post(post_url, add)
        .then((res) => {
          if (res.status === 200) {
            toast.success("🦄 Wow so easy!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setName("");
            setAddress("");
            setEmail("");
            setJobStatus("");
            setCheckBox(false);
            setSecret("");
          }
          console.log(res.data, "ressss");
        })
        .catch((error) => {
          toast.error(
            error?.response?.data?.message || "Something went wrong!"
          );
        });
    }

  
  };

  return (
    <div className="container">
      <div className="credential-body">
        <InputField
          className={"input-box"}
          type="text"
          value={name}
          placeholder={"Enter the Name"}
          onChange={handleName}
        />
        <InputField
          className={"input-box"}
          type="text"
          value={address}
          placeholder={"Enter the Address"}
          onChange={handleAddress}
        />
        <InputField
          className={"input-box"}
          type="text"
          value={email}
          placeholder={"Enter the Email"}
          onChange={handleEmail}
        />
        <InputField
          className={"input-box"}
          type="text"
          placeholder={"Enter Unique Code"}
          value={secret}
          onChange={handleUniqueCode}
        />
        <div className="drop-down-check-box-container">
          <select
            className="drop-down"
            value={jobstatus}
            onChange={(e) => handleDropDown(e)}
          >
            {options.map((index) => (
              <option key={index.value} value={index.value}>
                {index.label}
              </option>
            ))}
          </select>
          <div className="check-box">
            <InputField
              className={"check-box"}
              type="checkbox"
              checked={checkBox}
              onChange={handleCheckBox}
            />

            <>
              <label>Do like to code</label>
            </>
          </div>
        </div>

        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
