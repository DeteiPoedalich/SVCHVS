import '../GetStartedComp/GetStarted.css'
import Button from '../../MUI components/button.jsx'

export default function GetStarted(){
    return(
        <div id="Main_container1" className="Main_container1">
            <div className="Main_container1_left_div">               
                    <p id="Curated_Conv" className="Main_container1_top_text">Curated and Convenient</p>
                    <p id= "Main_1Text" className="Main_container1_bottom_text">We've built our offerings on the principle that everyone deserves high-quality design without the high cost. We offer elevated rental inventory, to transform your space. Reuse and recycle - we make the decision as light as a “feather”</p>
                    <Button text="Get started" color="rgb(200,75,25)"/>
            </div>
            <div className="Main_container1_img"> 
                <img src='img/Main_Container1_img.png' alt=""></img>
            </div>
        </div>
    )
}