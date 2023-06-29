import React, { useState, useEffect } from "react";
import "../Styles/Product.css"
//import "./Card.css"


function Product(props) {
  return (
    <div className="Product-Container">
      <h4 id="Product-Title">{props.Title}</h4>
      <img src={props.src}alt="Product" className="Product-Img"></img>
      <button id="decrement-button">-</button>
      <input type="text" placeholder="0" id="Product-input"></input>
      <button id="increment-button">+</button>
    
    </div>
  )
}

export default Product;