import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ArchiveTemperCarbonization from "./pages/ArchiveCharts/ArchiveCarbonizaiton.tsx";

const App: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/archiveTemperCarbonization" element={<ArchiveTemperCarbonization/>}/>
    </Routes>
  </HashRouter>

);

export default App;
