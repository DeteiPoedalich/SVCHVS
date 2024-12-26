
import '../SliderComp/Slider.css';
import React, { useState, useEffect } from 'react';
import Rating from "../../MUI components/Rating.jsx"
import { useDispatch, useSelector } from 'react-redux';
import { addReview, deleteReview,updateReview } from '../../slices/reviewSlice.js';
import {Popup} from "reactjs-popup"

export default function  Slider(){    
    const selectedReviews=useSelector(state=>state.reviewItems.reviews)
    const dispatch= useDispatch()
    const [newCardImg, setNewCardImg] = useState("");
    const [newCardText, setNewCardText] = useState("");
        const handleDelete=(id)=>{
            console.log(id)
            dispatch(deleteReview({id}))
        }
        const handleAdd=()=>{
            dispatch(addReview({id:selectedReviews.length,text:newCardImg,from:newCardText}))
        }
        const handleUpdate=(id)=>{
            console.log(id)
            dispatch(updateReview({id,updatedItem:{text:newCardImg, from:newCardText}}))
        
        }
        const HandleCardImgInput = (e)=>{
            setNewCardImg(e.target.value)
        }
        const HandleCardTextInput = (e)=>{
            setNewCardText(e.target.value)
        }
    return(
        <div id="Main_container6" className="Main_container6">
                <p id="Main_6_text1" className="Main_container6_text">The Reviews are In</p>
                <div className="Main_container6_rectangles">
                {selectedReviews.map((review) => (
                    <div  className="Main_container6_rectangle1" >
                        <div className="stars">
                            <Rating/>      
                        </div>                     
                        <p id="Main_6_text2" className="Main_container6_rectangle_review">{review.text}</p>
                        <p id="Main_6_text3" className="Main_container6_rectangle_who">{review.from}</p>
                        <button onClick={()=>{handleDelete(review.id)}}>Delete</button>
                        <Popup trigger ={<button className='button-in-card open-redact-menu'>{("Change review")}</button>} modal nested>{ 
                    close=>( 
                        <div className='modal-image'> 
                            <input value="X" type="button" onClick={() => {close()}}>
                
                            </input> 
                
                            <div> 
                                <p>Change who</p> 
                                <input type="text" className='modal-input input-title-card' onChange={HandleCardImgInput}/> 
                            </div> 
                            <div> 
                                <p>Change from</p> 
                                <input type="text" className='modal-input input-price-card' onChange={HandleCardTextInput}/> 
                            </div> 
                                <input type="button" value='Save' className='Save-card' onClick={()=>handleUpdate(review.id)}/>
                            </div> 
                            ) 
                    } 
                </Popup>
                    </div>
                ))}
                <Popup trigger ={<button className='button-in-card open-redact-menu'>{("Add review")}</button>} modal nested>{ 
                    close=>( 
                        <div className='modal-image'> 
                            <input value="X" type="button" onClick={() => {close()}}>
                
                            </input> 
                
                            <div> 
                                <p>Add who</p> 
                                <input type="text" className='modal-input input-title-card' onChange={HandleCardImgInput}/> 
                            </div> 
                            <div> 
                                <p>Add from</p> 
                                <input type="text" className='modal-input input-price-card' onChange={HandleCardTextInput}/> 
                            </div> 
                                <input type="button" value='Save' className='Save-card' onClick={handleAdd}/>
                            </div> 
                            ) 
                    } 
                </Popup>
                    
                </div>
            </div>
    )
}