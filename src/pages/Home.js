import React, { useEffect } from "react";
import Container from "../components/Container";
import { Credential } from "../components/task1/Credential";
// import Table from "../components/task2/Table";

const HomePage = () => {
 
  return (
    <Container>
      <Credential />
      {/* <Table/> */}
    </Container>
  );
};

export default HomePage;
