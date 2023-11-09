import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ShowEnterprises from "./pages/ShowEnterprises.jsx";
import DeleteEnterprise from "./pages/DeleteEnterprise.jsx";
import EditEnterprise from "./pages/EditEnterprise.jsx";
import CreateEnterprise from "./pages/CreateEnterprise.jsx";


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/enterprises/details/:id" element={<ShowEnterprises />}></Route>
        <Route path="/enterprises/delete/:id" element={<DeleteEnterprise />}></Route>
        <Route path="/enterprises/edit/:id" element={<EditEnterprise />}></Route>
        <Route path="/enterprises/create/:id" element={<CreateEnterprise />}></Route>

      </Routes>
  );
}

export default App;
