import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/LayOut/Header.tsx";
import TestPage from "./pages/TestPage.tsx";

function App() {

  return (
    <BrowserRouter>
      <div className='header'>
        <Header/>
      </div>
      <div className='body'>
        <Routes>
          <Route path='/carbon' element={<TestPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
