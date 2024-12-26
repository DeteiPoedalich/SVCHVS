import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import BuyFurniture from './Pages/BuyFurniture.jsx'
import NotFound from './Pages/notFound.jsx'
import AboutUs from './Pages/AboutUs.jsx'

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Shop" element={<BuyFurniture/>}/>
          <Route path="/aboutus" element={<AboutUs/>}></Route>
          <Route path="*"element={<NotFound/>} />
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
