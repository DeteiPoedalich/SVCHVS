import { Component } from "react";
import '../ShopByRoomComp/ShopByRoom.css'
import Main_container2_rect_1 from '../../img/Main_container2_rect_1.png'
import Main_container2_rect_2 from '../../img/Main_container2_rect_2.png'
import Main_container2_rect_3 from '../../img/Main_container2_rect_3.png'
import Main_container2_rect_4 from '../../img/Main_container2_rect_4.png'

class ShopByRoom extends Component{
    render(){
        return(
            
            <div id="Main_container2" className="Main_container2">
                <div class="Main_container2_text">
                <p id="Shop_by_Room" >Shop by Room</p> 
                </div>
                <div id="Main_container2_rectangles" className="Main_container2_rectangles">
                    <div id="Main_container2_rectangle1" onclick="window.location.href='livingroom.html';" class="Main_container2_rectangle1">
                        <img src={Main_container2_rect_1} alt=""></img>
                        <p id="Living_room">Living Room</p>
                    </div>
                    <div id="Main_container2_rectangle2" onclick="window.location.href='Bedroom.html';" class="Main_container2_rectangle2">
                        <img src={Main_container2_rect_2} alt=""></img>
                        <p id="Bedroom">Bedroom</p>
                    </div>
                    <div id="Main_container2_rectangle3" onclick="window.location.href='Office.html';" class="Main_container2_rectangle3">
                        <img src={Main_container2_rect_3} alt=""></img>
                        <p id="Home_Office">Home Office</p>
                    </div>
                    <div id="Main_container2_rectangle4" onclick="window.location.href='Diningroom.html';" class="Main_container2_rectangle4">
                        <img src={Main_container2_rect_4} alt=""></img>
                        <p id="Dining_Room">Dining Room</p>
                    </div>                
                </div>
            </div>
             
        )
    }
}
export default ShopByRoom;