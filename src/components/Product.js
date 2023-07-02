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
    let self = e.target
    //console.log(self)
    let target = document.getElementById(`input${self.id}`)
    console.log(target.value)
    if(isNaN(target.value)) {
      target.value = 0
    }
    else {
      target.value ++
    }
  }
  return (
    <div className="Product-Container">
      <h4 id="Product-Title">{props.Title}</h4>
      <img src={props.src}alt="Product" className="Product-Img"></img>
      <button className="decrement-button" onClick={decrement} id={props.myid}>-</button>
      <input type="text" placeholder="0" className="Product-input" id={`input${props.myid}`}></input>
      <button className="increment-button" onClick={increment} id={props.myid}>+</button>
    </div>
  )
}

export default Product;