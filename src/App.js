import '../src/Styles/App.css';
import RouteSwitch from './RouteSwitch';
import ShoppingCart from './components/ShoppingCart';
import React, { useState, useEffect } from "react";

function App() {
  const [NumberOfItems, setNumberOfItems] = useState((localStorage.getItem("items")) === null ? 0 : parseInt((localStorage.getItem("items"))));
  const [TotalCost, setTotalCost] = useState((localStorage.getItem('cost')) === null ? 0 : parseInt(localStorage.getItem('cost')));

  function setNumber(input){
    if(isNaN(parseInt(input)) || parseInt(input) < 1){
      return
    }
    setNumberOfItems(NumberOfItems + parseInt(input))
  }

  function setTotal(input){
    if(isNaN(parseInt(input)) || parseInt(input) < 1){
      return
    }
    setTotalCost(TotalCost + parseInt(input))
  }

  useEffect(()=>{
    localStorage.setItem('items', NumberOfItems)
    localStorage.setItem('cost', TotalCost)
  },[NumberOfItems, TotalCost]);

  return (
    <div className='App'>
      <div id='nav-bar'>
        <div id='HomeButton' className='nav-bar-gridItem'>
          <a href="/HomePage">Home</a>
        </div>
        <div id='ShoppingCart-Container' className='nav-bar-gridItem'>
          <ShoppingCart NumberOfItems = {NumberOfItems} TotalCost = {TotalCost} />
        </div>
        <div  id='ShopButton' className='nav-bar-gridItem'>
        {/* <a href="http://localhost:3000/ShopPage">Shop</a> */}
        <a href="/ShopPage">Shop</a>
        </div>
      </div>
      <div id='app-body'>
        <RouteSwitch stateItemsChanger = {setNumber} stateCostChanger = {setTotal}/>
      </div>
  </div>
  );
}

export default App;
