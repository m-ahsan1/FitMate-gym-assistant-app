import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Nav from "./components/Nav";
import Dashboard from "./screens/Dashboard";
import ApplicationsPage from "./application/ApplicationsPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/applications" element={<ApplicationsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
