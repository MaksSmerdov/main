import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TemperCarbonization from "./pages/ArchiveCharts/Carbon/Carbonization/TemperCarbonization.tsx";
import PressureCarbonization from "./pages/ArchiveCharts/Carbon/Carbonization/PressureCarbonization.tsx";
import LevelPercentCarbonization from "./pages/ArchiveCharts/Carbon/Carbonization/LevelPercentCarbonization.tsx";
import NotisCarbonization from "./pages/ArchiveCharts/Carbon/Carbonization/NotisCarbonization.tsx";
import LevelCarbonization from "./pages/ArchiveCharts/Carbon/Carbonization/LevelCarbonization.tsx";

const App: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/TemperCarbonization/:id" element={<TemperCarbonization/>}/>
      <Route path="/PressureCarbonization/:id" element={<PressureCarbonization/>}/>
      <Route path="/LevelPercentCarbonization/:id" element={<LevelPercentCarbonization/>}/>
      <Route path="/NotisCarbonization/:id" element={<NotisCarbonization/>}/>
      <Route path='/LevelCarbonization/:id' element={<LevelCarbonization/>}/>
    </Routes>
  </HashRouter>

);

export default App;
