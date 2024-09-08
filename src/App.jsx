import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CreateCompetition from "./pages/CreateCompetition";
import JoinCompetition from "./pages/JoinCompetition";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create-competition" element={<CreateCompetition />} />
        <Route path="/join-competition" element={<JoinCompetition />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
