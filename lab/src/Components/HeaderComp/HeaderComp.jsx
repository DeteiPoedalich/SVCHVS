import { Component } from "react";
import '../HeaderComp/Header.css';
import feather from'../../img/feather.png'
import cart from'../../img/cart.png'


class Header extends Component{
    render(){
        return(
            <header>
                <div className="a_container">
                    <a id="Furniture" href="#Main_container2">Furniture</a>
                    <a id="Why" href="">Why Feather</a>
                    <a id="Business" href="">Feather for Business</a>
                </div>
                <div id="feather" className="header_container_img">
                    <img  src={feather} alt=""></img>
                </div>
                <div className="a_container_2">
                    <a id="Check_Delivery" href="">Check if We Deliver</a>
                    <a id="Search" href="">Search</a>
                    <p id="Account" >Account</p>
                    <button id="languageButton">English</button>
                    <button id="themeButton" >Theme</button>
                </div>
                <div className="header_container_img_cart">
                        <img src={cart} alt=""></img>
                </div>
            </header>
        )
    }
}
export default Header;