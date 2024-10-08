import './App.css';
import Header from'./Components/HeaderComp/HeaderComp.jsx'
import Footer from './Components/FooterComp/FooterComp.jsx'
import ShopByRoom from './Components/ShopByRoomComp/ShopByRoomComp.jsx';
import GetStarted from './Components/GetStartedComp/GetStartedComp.jsx';
import Slider from './Components/SliderComp/SliderComp.jsx'
import Sponsors from './Components/SponsorsComp/SponsorsComp.jsx'

function App() {
  return (
    <>
      <Header/>
      <main>
        <GetStarted/>
        <ShopByRoom/>
        <Slider/>
        <Sponsors/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
