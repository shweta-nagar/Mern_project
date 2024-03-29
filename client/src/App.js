import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import About from "./component/About";
import Contact from "./component/Contact";
import Register from "./component/Register";
import Services from "./component/Services";
import Home from "./component/Home";
import AdminPage from "./layout/AdminPage";
import AdminStudents from "./component/AdminStudents";
import AdminContacts from "./component/AdminContacts";
import AdminService from "./component/AdminService";
import AdmindeleteServices from "./component/AdmindeleteServices";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<AdminPage />}>
          <Route path="students" element={<AdminStudents />}></Route>
          <Route path="contacts" element={<AdminContacts />}></Route>
          <Route path="service" element={<AdminService/>}></Route>
          <Route path="services/delete" element={<AdmindeleteServices/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
