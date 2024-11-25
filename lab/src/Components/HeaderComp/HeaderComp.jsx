import '../HeaderComp/Header.css';
import {Link} from "react-router-dom"
import ButtonGroup from"../../MUI components/ButtonGroup.jsx"
import Search from "../../MUI components/Search.jsx"
import Tooltip from "../../MUI components/Tooltip.jsx"
import Account from "../../MUI components/Account.jsx"

export default function  HeaderComp(){    
    return(
        <header>
                <div className="a_container">
                    <a id="Furniture" href="#Main_container2">Furniture</a>
                    <a id="Why" href="">Why Feather</a>
                    <a id="Business" href="">Feather for Business</a>
                </div>
                <div id="feather" className="header_container_img">
                    <Link to="/">
                    <img  src='img/feather.png' alt=""></img>
                    </Link>
                    
                </div>
                <div className="a_container_2">
                    <a id="Check_Delivery" href="">Check if We Deliver</a>
                    <Search/>
                    <Account/>
                    <ButtonGroup text1="English" text2="Theme"/>
                </div>
                <div className="header_container_img_cart">
                        <Tooltip img ="img/cart.png"/>
                </div>
            </header>
    )
}