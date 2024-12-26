import React, { useState, useEffect } from 'react';
import '../ShopItem/ShopItem.css';
import FAB from "../../MUI components/FAB.jsx"
import {addShopItem,updateShopItem,deleteShopItem} from '../../slices/shopItemsSlice.js'
import { useDispatch, useSelector } from 'react-redux';
import {Popup} from "reactjs-popup"

export default function ShopItem() {
    const selectedItems=useSelector(state=>state.shopItems.items)
    const dispatch= useDispatch()
    const [cards, addCards] = useState([]);
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
    const handleDelete=(id)=>{
        console.log(id)
        dispatch(deleteShopItem({id}))
    }
    const handleAdd=(id,itemImg,itemText)=>{
        dispatch(addShopItem({id,itemImg,itemText}))
    }
    const handleUpdate=(id)=>{
        console.log(id)
        dispatch(updateShopItem({id,updatedItem:{itemImg:newCardImg, itemText:newCardText}}))

    }
    const HandleCardImgInput = (e)=>{
        setNewCardImg(e.target.value)
    }
    const HandleCardTextInput = (e)=>{
        setNewCardText(e.target.value)
    }

    return (
        <div>
            <div className='items'>
                {cards.map((card) => (
                    <div className="item" key={card.id}>
                        <img src={card.itemImg} alt="123" />
                        <p>{card.itemText}</p>
                        <div className="buttons">                           
                                
                                <FAB mod={()=>handleAdd(card.id,card.itemImg,card.itemText)}/>                               
                        
                        </div>
                    </div>
                ))}
            </div>
            <div>
                {(!selectedItems||selectedItems.length===0)?(
                    <p>Nothing found</p>
                    
                )
                :
                (
                    <div className='List'>
                        {selectedItems.map((item)=>
                            <div className="item" key={item.id}>
                            <img src={item.itemImg} alt="123" />
                            <p>{item.itemText}</p>
                            <div className="buttons">                                                          
                                    <button onClick={()=>handleDelete(item.id)}></button>
                                    <Popup trigger ={<button className='button-in-card open-redact-menu'>{("Change properties")}</button>} modal nested>{ 
                                        close=>( 
                                                <div className='modal-image'> 
                                                    <input value="X" type="button" onClick={() => {close()}}>

                                                    </input> 

                                                    <div> 
                                                        <p>Lets set a title</p> 
                                                        <input type="text" className='modal-input input-title-card' onChange={HandleCardImgInput}/> 
                                                    </div> 
                                                    <div> 
                                                        <p>Lets set a description</p> 
                                                        <input type="text" className='modal-input input-price-card' onChange={HandleCardTextInput}/> 
                                                    </div> 
                                                    <input type="button" value='Save' className='Save-card' onClick={() => handleUpdate(item.id)}/>
                                                </div> 
                                            ) 
                                        } 
                                    </Popup>
                            </div>
                        </div>
                        )}
                    </div>
                )
            }
            </div>
                    
        </div>
    );
}