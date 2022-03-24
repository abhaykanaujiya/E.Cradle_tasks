const Validate = (
  name,
  address,
  email,
  jobStatus,
  doLiketoCode,
  uniqueCode
) => {
  console.log( doLiketoCode,"gfgfhhjgv");
  const regex = /.+\@.+\..+/;
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
  } else if (regex.test(email) === false) {
    return {
      type: "email",
      msg: "email number is invalid",
      status: false,
    };
  } else if (uniqueCode !== "72dhefe") {
    return {
      type: "uniqueCode",
      msg: "uniqueCode is invalid",
      status: false,
    };
  } else if (
    jobStatus === "" &&
    jobStatus !== "Unemployed" &&
    jobStatus !== "Working" &&
    jobStatus !== "Student" &&
    jobStatus !== "Retired"
  ) {
    return {
      type: "jobStatus",
      msg: "jobStatus number is invalid",
      status: false,
    };
  } else if ( !doLiketoCode ) {
    return {
      type: "doLiketoCode",
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
