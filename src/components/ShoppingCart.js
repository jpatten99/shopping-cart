import React, { useState, useEffect } from "react";
import "../Styles/ShoppingCart.css"

function ShoppingCart(props) {
  return (
    <div className="ShoppingCart-Container">
      <h5>Items in cart: {props.NumberOfItems}</h5>
      <h5>Total cost: {props.TotalCost}</h5>
    </div>
  )
}

export default ShoppingCart;