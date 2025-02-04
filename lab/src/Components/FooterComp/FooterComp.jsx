import '../FooterComp/Footer.css';
import TextField from "../../MUI components/TextField.jsx"
import { Link } from 'react-router-dom';

export default function  FooterComp(){    
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
                <Link id="footer_Text13" to='/aboutus'>About Feather</Link>
                <a id="footer_Text14" href="">How it Works</a>
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
                <div className="Social_media_img">
                    <img src="img/mail.png"alt=""></img>
                    <img src='img/pinterest.png' alt=""></img>
                    <img src='img/twitter.png' alt=""></img>
                    <img src='img/instagram.png' alt=""></img>
                    <img src='img/LinkedIn.png' alt=""></img>
                    <img src='img/Facebook.png' alt=""></img>
                </div>
            </div>
            <div className="NEWSLETTER">
                <p id="footer_Text30">JOIN OUR NEWSLETTER</p>
                <TextField/>
            </div>
            <div className="window">
                <img src='img/window.png' alt=""></img>
            </div>
            
        </div>
        
    </div>
        <div id="Contact_info" className="Contact_info">
            <a href="https://www.google.com/intl/ru/gmail/about/">himanru3@gmail.com</a>
            <a href="tel:+375445526040">+375445526040</a>
            <a href="https://github.com/DeteiPoedalich">Github</a>
            <p id="Log_out">Log out</p>
            <p id="reset">Reset Settings</p>
            <p id="view_users" >View Users</p>
        </div>
    </footer>
    )
}

{/* {showAddModal && (
    <div className="modal">
        <div className="modal-content">
            <h2>Add New Card</h2>
            <label htmlFor="newCardImg">Image URL:</label>
            <input type="text" id="newCardImg" value={newCardImg} onChange={(e) => setNewCardImg(e.target.value)} />
            <label htmlFor="newCardText">Card Title:</label>
            <input type="text" id="newCardText" value={newCardText} onChange={(e) => setNewCardText(e.target.value)} />

            <Divider/>
            <button onClick={closeAddModal}>Close</button>
            <button onClick={() => {
                const newCard = { id: cards.length + 1, itemImg: newCardImg, itemText: newCardText };
                const updatedCards = [...cards, newCard];
                addCards(updatedCards);
                localStorage.setItem('cards', JSON.stringify(updatedCards));
                setNewCardImg("");
                setNewCardText("");
                closeAddModal();
            }}>Save</button>
        </div>
    </div>
)}


{showEditModal && (
    <div className="modal">
        <div className="modal-content">
            <h2>Edit Card</h2>
            <label htmlFor="editCardImg">Image URL:</label>
            <input type="text" id="editCardImg" value={cardImg || cards.find(card => card.id === selectedCardId)?.itemImg} onChange={(e) => changeCardImg(e.target.value)} />
            <label htmlFor="editCardText">Card Title:</label>
            <input type="text" id="editCardText" value={cardText || cards.find(card => card.id === selectedCardId)?.itemText} onChange={(e) => changeCardText(e.target.value)} />
            <button onClick={closeEditModal}>Close</button>
            <button onClick={() => {
                const updatedCards = cards.map(card =>
                    card.id === selectedCardId
                        ? {
                            ...card,
                            itemImg: cardImg !== "" ? cardImg : card.itemImg,
                            itemText: cardText !== "" ? cardText : card.itemText
                        }
                        : card
                );

                updateCard(cardImg, cardText, selectedCardId);
                localStorage.setItem('cards', JSON.stringify(updatedCards));
                changeCardImg("");
                changeCardText("");
                closeEditModal();
            }}>Save</button>
        </div>
    </div>
)} */}

{/* <div className="modal">
    //     <div className="modal-content">
    //         <h2>Edit Card</h2>
    //         <label htmlFor="editCardImg">Image URL:</label>
    //         <input type="text" id="editCardImg" value={cardImg || cards.find(card => card.id === selectedCardId)?.itemImg} onChange={(e) => changeCardImg(e.target.value)} />
    //         <label htmlFor="editCardText">Card Title:</label>
    //         <input type="text" id="editCardText" value={cardText || cards.find(card => card.id === selectedCardId)?.itemText} onChange={(e) => changeCardText(e.target.value)} />
    //         <button onClick={closeEditModal}>Close</button>
    //         <button onClick={() => { */}
    //             const updatedCards = cards.map(card =>
    //                 card.id === selectedCardId
    //                     ? {
    //                         ...card,
    //                         itemImg: cardImg !== "" ? cardImg : card.itemImg,
    //                         itemText: cardText !== "" ? cardText : card.itemText
    //                     }
    //                     : card
    //             );

    //             // updateCard(cardImg, cardText, selectedCardId);
    //             localStorage.setItem('cards', JSON.stringify(updatedCards));
    //             changeCardImg("");
    //             changeCardText("");
    //             handleUpdate(selectedCardId)
    //             closeEditModal();
    //         }}>Save</button>
    //     </div>
    // </div>