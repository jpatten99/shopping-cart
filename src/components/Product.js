import React, { useState, useEffect } from "react";
import "../Styles/Product.css"
//import "./Card.css"


function Product(props) {
  function decrement(e) {
    let self = e.target
    //console.log(self)
    let target = document.getElementById(`input${self.id}`)
    console.log(target.value)
    if(isNaN(target.value)) {
      target.value = 0
    }
    else {
      target.value --
    }
  }

  function increment(e) {
    console.log(props.cost)
    let self = e.target
    let target = document.getElementById(`input${self.id}`)
    if(isNaN(target.value)) {
      target.value = 0
    }
    else {
      target.value ++
    }
  }

  return (
    <div className="Product-Container">
      <div id="product-title-container">
        <h5 id="Product-Title">{props.Title}</h5>
      </div>
      <div id="product-img-container">
        <img src={props.src}alt="Product" className="Product-Img"></img>
      </div>
      <div id="product-buttonBar-container">
        <button className="decrement-button" onClick={decrement} id={props.myid}>-</button>
        <input type="text" placeholder="0" className="Product-input" id={`input${props.myid}`}></input>
        <button className="increment-button" onClick={increment} id={props.myid}>+</button>
      </div>
      <div id="product-addToCart-container">
        <button className="addToCart-button" onClick={()=>{
          console.log(document.getElementById(`input${props.myid}`).value)
          props.stateItemsChanger(document.getElementById(`input${props.myid}`).value)
        }}>Add to cart</button>
      </div>
    </div>
  )
}

export default Product;