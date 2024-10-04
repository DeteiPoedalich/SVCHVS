import './App.css';
import Header from'./Components/HeaderComp/HeaderComp.jsx'
import Footer from './Components/FooterComp/FooterComp.jsx'
import ShopByRoom from './Components/ShopByRoomComp/ShopByRoomComp.jsx';
import GetStarted from './Components/GetStartedComp/GetStartedComp.jsx';

function App() {
  return (
    <>
      <Header/>
      <main>
        <GetStarted/>
        <ShopByRoom/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
