import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import {CarbonRoutes} from "./routes/CarbonRoutes.tsx";
import {UtvhRoutes} from "./routes/UtvhRoutes.tsx";

const App: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      {CarbonRoutes()}
      {UtvhRoutes()}
    </Routes>
  </HashRouter>

);

export default App;
