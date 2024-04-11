import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Disclosure1 from "./components/Navigation";
import Intranet from "./components/Intranet";
import JuramZaavar from "./components/JuramZaavar";
import VideoZaavar from "./components/VideoZaavar";
import ZeelUA from "./components/Juramuud/items";
import data from "./json-files/juram-data.json";

const allGarchigData = [
  ...data.ZUA,
  ...data.ZChiglel,
  ...data.SalbarUA,
  ...data.NBB,
  ...data.HR,
  ...data.ENuhtsul,
  ...data.Contract,
  ...data.Blank,
];

function App() {
  const itemRoutes = allGarchigData.map((_, index) => (
    <Route
      key={index}
      path={`/juramzaavar/item-${index + 1}`}
      element={<ZeelUA data={allGarchigData} index={index} />}
    />
  ));
  return (
    <>
      <Router>
        <Disclosure1 />
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="/intranet" element={<Intranet />} />
          <Route path="/juramzaavar/*" element={<JuramZaavar />} />
          <Route path="/videozaavar" element={<VideoZaavar />} />
          {itemRoutes}
        </Routes>
      </Router>
    </>
  );
}

export default App;
