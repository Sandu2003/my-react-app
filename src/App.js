import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Chatbot from "./components/Chatbot"; // Chatbot import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Chatbot /> {/* Add chatbot so it appears on all pages */}
    </Router>
  );
}

export default App;
