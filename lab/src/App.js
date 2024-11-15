import './App.css';
import Header from'./Components/HeaderComp/HeaderComp.jsx'
import Footer from './Components/FooterComp/FooterComp.jsx'
import ShopByRoom from './Components/ShopByRoomComp/ShopByRoomComp.jsx';
import GetStarted from './Components/GetStartedComp/GetStartedComp.jsx';
import Slider from './Components/SliderComp/SliderComp.jsx'
import Sponsors from './Components/SponsorsComp/SponsorsComp.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import BuyFurniture from './Pages/BuyFurniture.jsx'

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Shop" element={<BuyFurniture/>}/>
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
