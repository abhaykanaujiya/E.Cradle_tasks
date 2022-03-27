import axios from "axios";
import React, { useEffect, useState } from "react";
import InputField from "../common/input";
import "./credential.css";
import { POST_URL, options } from "../../constants/Constants";
import { toast } from "react-toastify";
import Validate from "../validation";
import Table from "../task2/Table";
import { useNavigate } from "react-router-dom";
import eye from "../../utils/eye.png";
import close from "../../utils/close.png";
// import { Mailer } from "../task1/NodeMailer";
export const Credential = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [jobStatus, setJobStatus] = useState("");
  const [isCheckBox, setIsCheckBox] = useState(false);
  const [secret, setSecret] = useState("");
  const [errors, setErrors] = useState({ type: "", msg: "", status: false });
  const [passwordShown, setPasswordShown] = useState(false);

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

  const handleCheckBox = (e) => {
    setIsCheckBox(e.target.checked);
  };

  const handleUniqueCode = (e) => {
    setSecret(e.target.value);
  };
  const handleDropDown = (e) => {
    setJobStatus(e.target.value);
  };

  const postContactsData = async () => {
    const data = {
      Name: name,
      Address: address,
      Email: email,
      JobStatus: jobStatus,
      DoLiketoCode: isCheckBox,
      Secret: secret,
    };
    try {
      const response = await axios.post(POST_URL, data);
      if (response.status === 200) {
        toast.success("🦄 Wow so easy!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/table");
        setName("");
        setAddress("");
        setEmail("");
        setJobStatus("");
        setIsCheckBox(false);
        setSecret("");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    }
  };
  const handleEyeOn = () => {
    console.log("eyeon");
    setPasswordShown(!passwordShown);
  };
  const handleEyeOff = () => {
    console.log("eyeoff");
    setPasswordShown(true);
  };

  const handleSubmit = () => {
    const result = Validate(
      name,
      address,
      email,
      jobStatus,
      isCheckBox,
      secret
    );
    if (!result?.status) {
      console.log(result, "result");
      setErrors(result);

      // toast(error.msg || "Users details are not correct!");
    } else {
      setErrors({ type: "", msg: "", status: true });
      postContactsData();
    }
  };

  return (
    <div className="credentials-container">
      <div className="credential-body">
        <h3>Contact Details</h3>
        <InputField
          className={"input-box"}
          type="text"
          value={name}
          placeholder={"Enter the Name"}
          onChange={handleName}
        />

        {!errors.status && errors.type === "name" && (
          <p className="p" style={{ color: "red" }}>
            {errors.msg}
          </p>
        )}

        <InputField
          className={"input-box"}
          type="text"
          value={address}
          placeholder={"Enter the Address"}
          onChange={handleAddress}
        />
        {!errors.status && errors.type === "address" && (
          <p style={{ color: "red" }}>{errors.msg}</p>
        )}
        <InputField
          className={"input-box"}
          type="text"
          value={email}
          placeholder={"Enter the Email"}
          onChange={handleEmail}
        />
        {!errors.status && errors.type === "email" && (
          <p style={{ color: "red" }}>{errors.msg}</p>
        )}
        <div className="secret-field">
          <InputField
            className={"input-box"}
            type={passwordShown ? "text" : "password"}
            placeholder={"Enter Unique Code"}
            value={secret}
            onChange={handleUniqueCode}
          />
          <span
            onClick={passwordShown ? handleEyeOn : handleEyeOff}
            className="eye"
          >
            <img
              src={!passwordShown ? eye : close}
              style={{ width: "20px", height: "20px" }}
            />
          </span>
        </div>

        {!errors.status && errors.type === "uniqueCode" && (
          <p style={{ color: "red" }}>{errors.msg}</p>
        )}
        <div className="drop-down-check-box-container">
          <select
            className="drop-down"
            value={jobStatus}
            onChange={(e) => handleDropDown(e)}
          >
            {options.map((index) => (
              <option key={index.value} value={index.value}>
                {index.label}
              </option>
            ))}
          </select>
          <div>
            {!errors.status && errors.type === "jobStatus" && (
              <p style={{ color: "red" }}>{errors.msg}</p>
            )}
          </div>
          <div className="check-box">
            <InputField
              className={"check-box"}
              type="checkbox"
              checked={isCheckBox}
              onChange={handleCheckBox}
            />
            <label>Do like to code</label>
          </div>
          <div>
            {!errors.status && errors.type === "doLiketoCode" && (
              <p style={{ color: "red" }}>{errors.msg}</p>
            )}
          </div>
        </div>
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
