import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/Home";
import { ViewTable } from "../../pages/ViewTable";


const Navigation=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/table"
          element={
          <ViewTable />
          }
        />
        <Route
          path="*"
          element={
            <HomePage style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </HomePage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Navigation;
