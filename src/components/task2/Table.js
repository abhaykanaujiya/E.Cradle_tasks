import axios from "axios";
import React, { useState } from "react";
import { get_url } from "../../constants/Constants";
import { toast } from "react-toastify";
import "./table.css";

const Table = () => {
  const [tableData, setTableData] = useState([]);
  axios
    .get(get_url, {
      headers: { token: "v3p42mqQDWrg9j4gvbTrxT808n30vr5483" },
    })
    .then((res) => {
      setTableData(res.data.data);
    })
    .catch((error) => console.log(error.response, "error"));
  return (
    <div className="table-container">
      <table className="table-body">
        <tbody>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Jobstatus</th>
            <th>DoLiketoCode</th>
          </tr>

          {tableData?.map((v, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{v.Name}</td>
              <td>{v.Address}</td>
              <td>{v.Email}</td>
              <td>{v.JobStatus}</td>
              <td>{`${v.DoLiketoCode}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
