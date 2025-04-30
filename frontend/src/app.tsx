import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import {CarbonRoutes} from "./routes/CarbonRoutes.tsx";
import {UtvhRoutes} from "./routes/UtvhRoutes.tsx";
import {Instructions} from "./pages/LibraryContent/Saim/Instructions.tsx";

const App: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      {CarbonRoutes()}
      {UtvhRoutes()}
      <Route path='/instruction' element={<Instructions/>}/>
    </Routes>
  </HashRouter>

);

export default App;
