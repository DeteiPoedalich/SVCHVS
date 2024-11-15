import React, { useState, useEffect } from 'react';
import '../ShopItem/ShopItem.css'; 


export default function ShopItem() {
  const [cards, addCards] = useState([]);
  const [cardImg, changeCardImg] = useState("");
  const [cardText, changeCardText] = useState("");
  const [newCardImg, setNewCardImg] = useState("");
  const [newCardText, setNewCardText] = useState("");

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
      const newItem = { ...prevCard, cardName: newCardName, cardText: newCardText };
      const updatedCards = [...prevState.slice(0, inx), newItem, ...prevState.slice(inx + 1)];
      localStorage.setItem('cards', JSON.stringify(updatedCards));
      
      return updatedCards;
  });
  
};
    
      const handleDeleteCard = (id) => {
        const newCards = cards.filter((card) => card.id !== id);
        addCards(newCards);
        localStorage.setItem('cards', JSON.stringify(newCards));
        console.log('1')
        console.log(newCards)
    };
  return (
    <div>
    <div className='items'>
      {cards.map((card) => (
        <div className="item" key={card.id}>
          <img src={card.itemImg} alt="123" />
          <p>{card.itemText}</p>
          <div className="buttons">
            <button id='deleteBut' onClick={()=>handleDeleteCard(card.id)}>Delete</button>
            <button id='redactBut' onClick={()=>updateCard(card.itemImg, card.itemText,card.id)}>Redact</button>
          </div>
        </div>
      ))}
      
    </div>
    <div className='addButtonDiv'>
    <button className='addButton'>+</button>
  </div>
  </div>
  );
}   