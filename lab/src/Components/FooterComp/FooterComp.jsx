import { Component } from "react";
import '../FooterComp/Footer.css';
import email from '../../img/mail.png';
import pinterest from '../../img/pinterest.png';
import twitter from '../../img/twitter.png';
import instagram from '../../img/instagram.png';
import LinkedIn from '../../img/LinkedIn.png';
import Facebook from '../../img/Facebook.png';
import window from '../../img/window.png';



class Footer extends Component{
    render(){
        return(
            <footer id="footer">
            <div className="footer_and_contact">
            <div className="footer_container">
                <div className="Furniture">
                    <p id="footer_Text1">FURNITURE</p>
                    <a id="footer_Text2" href="">Packages</a>
                    <a id="footer_Text3" href="livingroom.html">Living Room</a>
                    <a id="footer_Text4" href="Bedroom.html">Bedroom</a>
                    <a id="footer_Text5" href="Diningroom.html">Dining</a>
                    <a id="footer_Text6" href="Office.html">Home Office</a>
                    <a id="footer_Text7" href="">Decor</a>
                    <a id="footer_Text8" href="">Lighting</a>
                    <a id="footer_Text9" href="">Outdoor</a>
                    <a id="footer_Text10" href="#Main_container2">All Furniture</a>
                    <a id="footer_Text11" href="">Sample Sale</a>
                </div>
                <div className="About">
                    <p id="footer_Text12">ABOUT</p>
                    <a id="footer_Text13" href="">How it Works</a>
                    <a id="footer_Text14" href="">About Feather</a>
                    <a id="footer_Text15" href="">Feather Furniture</a>
                    <a id="footer_Text16" href="#Main_container6">Reviews</a>
                    <a id="footer_Text17" href="">Feather for WeWork</a>
                    <a id="footer_Text18" href="">Feather for Business</a>
                    <a id="footer_Text19" href="">Feather for Staging</a>
                    <a id="footer_Text20" href="">Affiliate Program</a>
                    <a id="footer_Text21" href="">Careers</a>
                    <a id="footer_Text22" href="">In Your Area</a>
                </div>
                <div className="Help">
                    <p id="footer_Text23">HELP</p>
                    <a id="footer_Text24" href="">FAQs</a>
                    <a id="footer_Text25" href="#Contact_info">Contact us</a>
                    <a id="footer_Text26" href="">Privacy Policy</a>
                    <a id="footer_Text27" href="">Terms</a>
                    <a id="footer_Text28" href="">FloorFound Terms</a>
                </div>
            </div>
            <div className="footer_right_container">
                <div className="Social_media">
                    <p id="footer_Text29">FEATHER ON SOCIAL MEDIA</p>
                    <div class="Social_media_img">
                        <img src={email} alt=""></img>
                        <img src={pinterest} alt=""></img>
                        <img src={twitter} alt=""></img>
                        <img src={instagram} alt=""></img>
                        <img src={LinkedIn} alt=""></img>
                        <img src={Facebook} alt=""></img>
                    </div>
                </div>
                <div className="NEWSLETTER">
                    <p id="footer_Text30">JOIN OUR NEWSLETTER</p>
                </div>
                <div className="window">
                    <img src={window} alt=""></img>
                </div>
                
            </div>
            
        </div>
            <div id="Contact_info" className="Contact_info">
                <a href="https://www.google.com/intl/ru/gmail/about/">himanru3@gmail.com</a>
                <a href="tel:+375445526040">+375445526040</a>
                <a href="https://github.com/DeteiPoedalich">Github</a>
                <p id="Log_out">Log out</p>
                <p id="reset">Reset Settings</p>
                <p id="view_users" onclick="window.location.href='Users.html';">View Users</p>
            </div>
        </footer>
        )
    }
}
export default Footer