import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Disclosure1 from "./components/Navigation";
import Intranet from "./components/Intranet";
import JuramZaavar from "./components/JuramZaavar";
import VideoZaavar from "./components/VideoZaavar";
import JuramTable from "./components/Juramuud/juram-table";
import pdfIcon from "./assets/pdf.png";
import docIcon from "./assets/doc.png";
import svg1 from "./assets/svg1.svg";
import Test from "./components/Test/Test";

function indexRoute() {}

function App() {
  return (
    <>
      <Router>
        <Disclosure1 />
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="/intranet" element={<Intranet />} />
          <Route path="/juramzaavar/*" element={<JuramZaavar />} />
          <Route path="/videozaavar" element={<VideoZaavar />} />
          <Route path="/test" element={<Test />} />
          <Route
            path="/juramzaavar/item-1"
            element={<JuramTable titleData="ZUA" icon={svg1} />}
          />
          <Route
            path="/juramzaavar/item-2"
            element={<JuramTable titleData="ZChiglel" icon={svg1} />}
          />
          <Route
            path="/juramzaavar/item-3"
            element={<JuramTable titleData="NBB" icon={svg1} />}
          />
          <Route
            path="/juramzaavar/item-4"
            element={<JuramTable titleData="SalbarUA" icon={svg1} />}
          />
          <Route
            path="/juramzaavar/item-5"
            element={<JuramTable titleData="HR" icon={svg1} />}
          />
          <Route
            path="/juramzaavar/item-6"
            element={<JuramTable titleData="Blank" icon={docIcon} />}
          />
          <Route
            path="/juramzaavar/item-7"
            element={<JuramTable titleData="Contract" icon={docIcon} />}
          />
          <Route
            path="/juramzaavar/item-8"
            element={<JuramTable titleData="ENuhtsul" icon={svg1} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
