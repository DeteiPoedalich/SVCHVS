import '../ShopByRoomComp/ShopByRoom.css'
import {Link} from "react-router-dom"

export default function  ShopByRoom(){    
    return(
        <div id="Main_container2" className="Main_container2">
        <div class="Main_container2_text">
        <p id="Shop_by_Room" >Shop by Room</p> 
        </div>
        <div id="Main_container2_rectangles" className="Main_container2_rectangles">

            <div id="Main_container2_rectangle1" onclick="window.location.href='livingroom.html';" class="Main_container2_rectangle1">
            <Link to="/Shop">
                <img src='img/Main_container2_rect_1.png' alt=""></img>
                <p id="Living_room">Living Room</p>
                </Link>
            </div>
            <div id="Main_container2_rectangle2" onclick="window.location.href='Bedroom.html';" class="Main_container2_rectangle2">
            <Link to="/Shop">
                <img src='img/Main_container2_rect_2.png' alt=""></img>
                <p id="Bedroom">Bedroom</p>
                </Link>
            </div>
            <div id="Main_container2_rectangle3" onclick="window.location.href='Office.html';" class="Main_container2_rectangle3">
            <Link to="/Shop">
                <img src='img/Main_container2_rect_3.png' alt=""></img>
                <p id="Home_Office">Home Office</p>
                </Link>
            </div>
            <div id="Main_container2_rectangle4" onclick="window.location.href='Diningroom.html';" class="Main_container2_rectangle4">
            <Link to="/Shop">
                <img src='img/Main_container2_rect_4.png' alt=""></img>
                <p id="Dining_Room">Dining Room</p>
                </Link>
            </div>                
        </div>
    </div>
    )
}