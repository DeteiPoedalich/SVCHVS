import { Component } from "react";
import '../SliderComp/Slider.css';
import pstar from'../../img/star_pink.png'
import ystar from'../../img/star_yellow.png'
import gstar from'../../img/star_green.png'
import rstar from'../../img/star_red.png'
import lgstar from'../../img/star_ligthgreen.png'



class Slider extends Component{
    render(){
        return(
            <div id="Main_container6" className="Main_container6">
                <p id="Main_6_text1" className="Main_container6_text">The Reviews are In</p>
                <div className="Main_container6_rectangles">
                    <div className="Main_container6_rectangle1">
                        <div className="stars">
                            <img src={pstar} alt=""></img>
                            <img src={pstar} alt=""></img>
                            <img src={pstar} alt=""></img>
                            <img src={pstar} alt=""></img>
                            <img src={pstar} alt=""></img>
                        </div>
                        <p id="Main_6_text2" className="Main_container6_rectangle_review">Honestly BEST EXPERIENCE moving ever.</p>
                        <p id="Main_6_text3" className="Main_container6_rectangle_who">- Julie, San Francisco, CA</p>
                    </div>
                    <div className="Main_container6_rectangle2">
                        <div className="stars">
                            <img src={ystar} alt=""></img>
                            <img src={ystar} alt=""></img>
                            <img src={ystar} alt=""></img>
                            <img src={ystar} alt=""></img>
                            <img src={ystar} alt=""></img>
                        </div>
                        <p id="Main_6_text4" className="Main_container6_rectangle_review">Extremely easy! Browsed for furniture and it was in my new apartment within a week.</p>
                        <p id="Main_6_text5" className="Main_container6_rectangle_who">- Anthony, Los Angeles, CA</p>
                    </div>
                    <div className="Main_container6_rectangle3">
                        <div className="stars">
                            <img src={gstar} alt=""></img>
                            <img src={gstar} alt=""></img>
                            <img src={gstar} alt=""></img>
                            <img src={gstar} alt=""></img>
                            <img src={gstar} alt=""></img>
                        </div>
                        <p id="Main_6_text6" className="Main_container6_rectangle_review">THIS JUST MAKES SENSE. Truly obsessed with Feather.</p>
                        <p id="Main_6_text7" className="Main_container6_rectangle_who">- Wesley, New York City, NY</p>
                    </div>
                    <div className="Main_container6_rectangle4">
                        <div className="stars">
                            <img src={rstar} alt=""></img>
                            <img src={rstar} alt=""></img>
                            <img src={rstar} alt=""></img>
                            <img src={rstar} alt=""></img>
                            <img src={rstar} alt=""></img>
                        </div>
                        <p className="Main_container6_rectangle_review">Flawless experience. From order, delivery, and now enjoying - couldn’t be more impressed with Feather.</p>
                        <p className="Main_container6_rectangle_who">- Robert, Los Angeles, CA</p>
                    </div>
                    <div className="Main_container6_rectangle5">
                        <div className="stars">
                            <img src={lgstar} alt=""></img>
                            <img src={lgstar} alt=""></img>
                            <img src={lgstar} alt=""></img>
                            <img src={lgstar} alt=""></img>
                            <img src={lgstar} alt=""></img>
                        </div>
                        <p className="Main_container6_rectangle_review">The items look exactly as I pictured, and I am so SO happy!</p>
                        <p className="Main_container6_rectangle_who">- Ian, New York City, NY</p>
                    </div>
                    <div className="Main_container6_rectangle6">
                        <button>All Reviews</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Slider;