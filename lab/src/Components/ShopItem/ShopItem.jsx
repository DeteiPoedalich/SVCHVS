import React, { useState, useEffect } from 'react';
import '../ShopItem/ShopItem.css';
import FAB from "../../MUI components/FAB.jsx"
import Divider from "../../MUI components/Divider.jsx"
import List from "../../MUI components/List.jsx"
import  SpeedDial  from '../../MUI components/SpeedDial.jsx';

export default function ShopItem() {
    const [cards, addCards] = useState([]);
    const [cardImg, changeCardImg] = useState("");
    const [cardText, changeCardText] = useState("");
    const [newCardImg, setNewCardImg] = useState("");
    const [newCardText, setNewCardText] = useState("");
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedCardId, setSelectedCardId] = useState(null);

    useEffect(() => {
        const loadCards = () => {
            const savedCards = localStorage.getItem('cards');
            if (savedCards) {
                addCards(JSON.parse(savedCards));
            } else {
                fetchCards();
            }
        };

        const fetchCards = async () => {
            const response = await fetch('./jsonfiles/ShopItems.json');
            const result = await response.json();
            addCards(result);
            localStorage.setItem('cards', JSON.stringify(result));
        };

        loadCards();
    }, []);

    const updateCard = (newCardName, newCardText, id) => {
        addCards((prevState) => {
            const inx = prevState.findIndex((item) => item.id === id);
            const prevCard = prevState[inx];
            const newItem = { ...prevCard, itemImg: newCardName, itemText : newCardText };
            const updatedCards = [...prevState.slice(0, inx), newItem, ...prevState.slice(inx + 1)];
            localStorage.setItem('cards', JSON.stringify(updatedCards));
            return updatedCards;
        });
    };

    const handleDeleteCard = (id) => {
        const newCards = cards.filter((card) => card.id !== id);
        addCards(newCards);
        localStorage.setItem('cards', JSON.stringify(newCards));
    };

    const openAddModal = () => {
        setShowAddModal(true);
    };

    const closeAddModal = () => {
        setShowAddModal(false);
    };

    const openEditModal = (id) => {
        setShowEditModal(true);
        setSelectedCardId(id);
    };

    const closeEditModal = () => {
        setShowEditModal(false);
        setSelectedCardId(null);
    };

    return (
        <div>
            <div className='items'>
                {cards.map((card) => (
                    <div className="item" key={card.id}>
                        <img src={card.itemImg} alt="123" />
                        <p>{card.itemText}</p>
                        <div className="buttons">                           
                            <List Red={() => openEditModal(card.id)} Del={() => handleDeleteCard(card.id)}/>

                        </div>
                    </div>
                ))}
            </div>
           <div className='addButtonDiv'>
                <FAB mod={openAddModal}/>
            </div> 

{showAddModal && (
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
)}
        </div>
    );
}