import React from "react";
import { Routes, Route } from "react-router-dom";

import "./index.css";

import Layout from "./Layout/Layout";
import Homes from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Community from "./pages/Community";
import Events from "./pages/Events";
import Hackathons from "./pages/Hackathons";
import Login from "./pages/Login";

import Signup from "./pages/Signup";
import Resources from "./pages/Resources";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Hackathons" element={<Hackathons />} />
        <Route path="/About" element={<About />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        {/* <Route path='/Hackathons' element={<Hackathons />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
