import {Route} from "react-router-dom";
import TemperCarbonization from "../pages/ArchiveCharts/Carbon/Carbonization/TemperCarbonization.tsx";
import PressureCarbonization from "../pages/ArchiveCharts/Carbon/Carbonization/PressureCarbonization.tsx";
import LevelPercentCarbonization from "../pages/ArchiveCharts/Carbon/Carbonization/LevelPercentCarbonization.tsx";
import NotisCarbonization from "../pages/ArchiveCharts/Carbon/Carbonization/NotisCarbonization.tsx";
import LevelCarbonization from "../pages/ArchiveCharts/Carbon/Carbonization/LevelCarbonization.tsx";
import TemperDryer from "../pages/ArchiveCharts/Carbon/Dryer/TemperDryer.tsx";
import VacuumDryer from "../pages/ArchiveCharts/Carbon/Dryer/VacuumDryer.tsx";
import TemperMpa from "../pages/ArchiveCharts/Carbon/Mpa/TemperMpa.tsx";
import PressureMpa from "../pages/ArchiveCharts/Carbon/Mpa/PressureMpa.tsx";
import VibrationMill from "../pages/ArchiveCharts/Carbon/Mills/VibrationMill.tsx";
import VibrationSBM from "../pages/ArchiveCharts/Carbon/Mills/VibrationSBM.tsx";
import VibrationYCVOK from "../pages/ArchiveCharts/Carbon/Mills/VibrationYCVOK.tsx";
import VibrationYGM from "../pages/ArchiveCharts/Carbon/Mills/VibrationYGM.tsx";
import TemperReactor from "../pages/ArchiveCharts/Carbon/ResinReactor/TemperReactor.tsx";
import LevelReactor from "../pages/ArchiveCharts/Carbon/ResinReactor/LevelReactor.tsx";
import ConsumptionResources from "../pages/ArchiveCharts/Carbon/EnergyResources/ConsumptionResources.tsx";
import PressureResources from "../pages/ArchiveCharts/Carbon/EnergyResources/PressureResources.tsx";

export const CarbonRoutes = () => {
  return (
    <>
      {/* Печи Карбонизации */}
      <Route path="/TemperCarbonization/:id" element={<TemperCarbonization/>}/>
      <Route path="/PressureCarbonization/:id" element={<PressureCarbonization/>}/>
      <Route path="/LevelPercentCarbonization/:id" element={<LevelPercentCarbonization/>}/>
      <Route path="/NotisCarbonization/:id" element={<NotisCarbonization/>}/>
      <Route path='/LevelCarbonization/:id' element={<LevelCarbonization/>}/>

      {/* Сушилки */}
      <Route path='/TemperDryer/:id' element={<TemperDryer/>}/>
      <Route path='/VacuumDryer/:id' element={<VacuumDryer/>}/>

      {/* Печи Активации */}
      <Route path='/TemperMpa/:id' element={<TemperMpa/>}/>
      <Route path='/PressureMpa/:id' element={<PressureMpa/>}/>

      {/* Мельницы */}
      <Route path='/VibrationMill/:id' element={<VibrationMill/>}/>
      <Route path='/VibrationSBM' element={<VibrationSBM/>}/>
      <Route path='/VibrationYCVOK' element={<VibrationYCVOK/>}/>
      <Route path='/VibrationYGM' element={<VibrationYGM/>}/>

      {/* Узлы учета на карбоне */}
      <Route path='/ConsumptionResources' element={<ConsumptionResources/>}/>
      <Route path='/PressureResources' element={<PressureResources/>}/>

      {/* Смоляные реакторы */}
      <Route path='/TemperReactor' element={<TemperReactor/>}/>
      <Route path='/LevelReactor' element={<LevelReactor/>}/>
    </>
  )
}