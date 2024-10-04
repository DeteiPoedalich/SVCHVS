import { Component } from "react";
import '../SponsorsComp/Sponsors.css';
import Purewon from '../../img/Purewon.png'
import MyDomaine from '../../img/MyDomaine.png'
import MindBodyGreen from '../../img/mindbodygreen.png'
import Forbes from '../../img/Forbes.png'
import FastCompany from '../../img/FastCompany.png'


class Sponsors extends Component{
    render(){
        return(
            <div className="Main_container7">
                <p>Ease the pain of moving from apartment to apartment.</p>
                <div className="Sponsors">
                    <img src={Purewon} alt=""></img>
                    <img src={MyDomaine} alt=""></img>
                    <img src={MindBodyGreen} alt=""></img>
                    <img src={Forbes} alt=""></img>
                    <img src={FastCompany} alt=""></img>
                </div>
            </div>
        )
    }
}
export default Sponsors;