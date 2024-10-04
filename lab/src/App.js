import './App.css';
import Header from'./Components/HeaderComp/HeaderComp.jsx'
import Footer from './Components/FooterComp/FooterComp.jsx'
import ShopByRoom from './Components/ShopByRoomComp/ShopByRoomComp.jsx';

function App() {
  return (
    <>
      <Header/>
      <main>
        <ShopByRoom/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
