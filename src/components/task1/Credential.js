import axios from "axios";
import React, { useEffect, useState } from "react";
import InputField from "../common/input";
import "./credential.css";
import { POST_URL, options } from "../../constants/Constants";
import { toast } from "react-toastify";
import Validate from "../validation";
import Table from "../task2/Table";
// import { Mailer } from "../task1/NodeMailer";
export const Credential = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [jobStatus, setJobStatus] = useState("");
  const [isCheckBox, setIsCheckBox] = useState(false);
  const [secret, setSecret] = useState("");
  const [errors, setErrors] = useState({ type: "", msg: "", status: false });
  const [isValid, setIsValid] = useState(false);

  // useEffect(() => {
  //   Mailer.send(
  //     "WelcomeEmail",
  //     { firstName: "Mathieu" },
  //     {
  //       to: "abhaykanaujiya@gmail.com",
  //     }
  //   );
  // }, []);

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
      const data = {
        Name: name,
        Address: address,
        Email: email,
        JobStatus: jobStatus,
        DoLiketoCode: isCheckBox,
        Secret: secret,
      };
      axios
        .post(POST_URL, data)
        .then((res) => {
          if (res.status === 200) {
            toast.success("🦄 Wow so easy!", {
              position: "top-right",
              autoClose: 2000,
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
            setIsCheckBox(false);
            setSecret("");
            setIsValid(true);
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
    <div className="credentials-container">
      {!isValid ? (
        <div className="credential-body">
          <InputField
            className={"input-box"}
            type="text"
            value={name}
            placeholder={"Enter the Name"}
            onChange={handleName}
          ></InputField>
          <>
            {!errors.status && errors.type === "name" && (
              <p className="p" style={{ color: "red" }}>{errors.msg}</p>
            )}
          </>
          <InputField
            className={"input-box"}
            type="text"
            value={address}
            placeholder={"Enter the Address"}
            onChange={handleAddress}
          />
          <>
            {!errors.status && errors.type === "address" && (
              <p style={{ color: "red" }}>{errors.msg}</p>
            )}
          </>
          <InputField
            className={"input-box"}
            type="text"
            value={email}
            placeholder={"Enter the Email"}
            onChange={handleEmail}
          />
          <>
            {" "}
            {!errors.status && errors.type === "email" && (
              <p style={{ color: "red" }}>{errors.msg}</p>
            )}
          </>
          <InputField
            className={"input-box"}
            type="text"
            placeholder={"Enter Unique Code"}
            value={secret}
            onChange={handleUniqueCode}
          />
          <>
            {!errors.status && errors.type === "uniqueCode" && (
              <p style={{ color: "red" }}>{errors.msg}</p>
            )}
          </>
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
            <>
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
            </>
          </div>
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      ) : (
        <Table />
      )}
    </div>
  );
};
