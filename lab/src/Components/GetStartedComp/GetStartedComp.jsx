import { Component } from "react";
import '../GetStartedComp/GetStarted.css'
import Main_Container1_img from '../../img/Main_Container1_img.png'
class GetStarted extends Component{
    render(){
        return(
            
        <div id="Main_container1" className="Main_container1">
            <div className="Main_container1_left_div">               
                    <p id="Curated_Conv" className="Main_container1_top_text">Curated and Convenient</p>
                    <p id= "Main_1Text" className="Main_container1_bottom_text">We've built our offerings on the principle that everyone deserves high-quality design without the high cost. We offer elevated rental inventory, to transform your space. Reuse and recycle - we make the decision as light as a “feather”</p>
                    <button id="Main_1_button" className="Main_container1_button">Get Started</button>
            </div>
            <div className="Main_container1_img"> 
                <img src={Main_Container1_img} alt=""></img>
            </div>
        </div>            
        )
    }
}
export default GetStarted;