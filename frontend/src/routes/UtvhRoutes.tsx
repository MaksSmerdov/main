import {Route} from "react-router-dom";
import LevelBoiler from "../pages/ArchiveCharts/Utvh/Boiler/LevelBoiler.tsx";
import ImBoiler from "../pages/ArchiveCharts/Utvh/Boiler/ImBoiler.tsx";
import PressureBoiler from "../pages/ArchiveCharts/Utvh/Boiler/PressureBoiler.tsx";
import VacuumBoiler from "../pages/ArchiveCharts/Utvh/Boiler/VacuumBoiler.tsx";
import GasBoiler from "../pages/ArchiveCharts/Utvh/Boiler/GasBoiler.tsx";
import SteamBoiler from "../pages/ArchiveCharts/Utvh/Boiler/SteamBoiler.tsx";
import LevelHvo from "../pages/ArchiveCharts/Utvh/Hvo/LevelHvo.tsx";
import FlowHvo from "../pages/ArchiveCharts/Utvh/Hvo/FlowHvo.tsx";

export const UtvhRoutes = () => {
  return (
    <>
      {/* Котлы (к.265) */}
      <Route path="/LevelBoiler/:id" element={<LevelBoiler/>}/>
      <Route path="/ImBoiler/:id" element={<ImBoiler/>}/>
      <Route path='/VacuumBoiler/:id' element={<VacuumBoiler/>}/>
      <Route path='/PressureBoiler/:id' element={<PressureBoiler/>}/>
      <Route path='/GasBoiler/:id' element={<GasBoiler/>}/>
      <Route path='/SteamBoiler/:id' element={<SteamBoiler/>}/>

      {/*ХВО*/}
      <Route path='/LevelHvo/:id' element={<LevelHvo/>}/>
      <Route path='/FlowHvo/:id' element={<FlowHvo/>}/>
    </>
  )
}