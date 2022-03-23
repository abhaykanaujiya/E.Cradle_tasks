const Validate = (
  name,
  address,
  email,
  jobStatus,
  doLiketoCode,
  uniqueCode
) => {
  if (name === "") {
    return {
      type: "name",
      msg: "name is missing",
      status: false,
    };
  } else if (address === "") {
    return {
      type: "address",
      msg: "address is missing",
      status: false,
    };
  } else if (email === "") {
    return {
      type: "email",
      msg: "email number is invalid",
      status: false,
    };
  } else if (uniqueCode === "") {
    return {
      type: "uniqueCode",
      msg: "uniqueCode is invalid",
      status: false,
    };
  } else if (jobStatus === "") {
    return {
      type: "job status",
      msg: "jobStatus number is invalid",
      status: false,
    };
  } else if (doLiketoCode === Boolean) {
    return {
      type: "doLiketoCode ",
      msg: "doLiketoCode is invalid",
      status: false,
    };
  } else {
    return {
      type: "",
      msg: "",
      status: true,
    };
  }
};
export default Validate;
