import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Disclosure1 from "./components/Navigation";
import Intranet from "./components/Intranet";
import JuramZaavar from "./components/JuramZaavar";
import VideoZaavar from "./components/VideoZaavar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Disclosure1 />
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="/intranet" element={<Intranet />} />
          <Route path="/juramzaavar" element={<JuramZaavar />} />
          <Route path="/videozaavar" element={<VideoZaavar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
