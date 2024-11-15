import '../HeaderComp/Header.css';




export default function  HeaderComp(){    
    return(
        <header>
                <div className="a_container">
                    <a id="Furniture" href="#Main_container2">Furniture</a>
                    <a id="Why" href="">Why Feather</a>
                    <a id="Business" href="">Feather for Business</a>
                </div>
                <div id="feather" className="header_container_img">
                    <img  src='img/feather.png' alt=""></img>
                </div>
                <div className="a_container_2">
                    <a id="Check_Delivery" href="">Check if We Deliver</a>
                    <a id="Search" href="">Search</a>
                    <p id="Account" >Account</p>
                    <button id="languageButton">English</button>
                    <button id="themeButton" >Theme</button>
                </div>
                <div className="header_container_img_cart">
                        <img src='img/cart.png' alt=""></img>
                </div>
            </header>
    )
}