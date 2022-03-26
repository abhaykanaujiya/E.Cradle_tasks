import axios from "axios";
import React, { useEffect, useState } from "react";
import { GET_TABLE_URL, TOKEN_KEY, UNIQUE_CODE } from "../../constants/Constants";
import {Loader} from "../../loader/Loader";
// import { toast } from "react-toastify";
import "./table.css";

const getRequestPayload = (endpoiint) => {
  console.log(endpoiint, "end");
  return {
    url: endpoiint,
    headers: { token: TOKEN_KEY },
    method: "get",
  };
};

const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [isLoading,setIsLoading]=useState(true)

  useEffect(() => {
    fetchTableData();
  }, []);

  const fetchTableData = async () => {
    try {
      const requestPayload = getRequestPayload(GET_TABLE_URL+UNIQUE_CODE);
      const response = await axios(requestPayload);
      if (response.status === 200) {
        console.log(response);
        setTableData(response.data?.data || []);
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <table className="table-container">
      {isLoading?<Loader/> :  <tbody>
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
      </tbody>}{
        
    }
    </table>
  );
};
export default Table;
