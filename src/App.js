import '../src/Styles/App.css';
import RouteSwitch from './RouteSwitch';
import ShoppingCart from './components/ShoppingCart';
import React, { useState, useEffect } from "react";

function App() {
  const [NumberOfItems, setNumberOfItems] = useState(0);
  const [TotalCost, setTotalCost] = useState(0);

  function setNumber(input){
    setNumberOfItems(NumberOfItems + parseInt(input))
    console.log("test")
  }
  return (
    <div className='App'>
      <div id='nav-bar'>
        <div id='HomeButton' className='nav-bar-gridItem'>
          <a href="http://localhost:3000">Home</a>
        </div>
        <div id='ShoppingCart-Container' className='nav-bar-gridItem'>
          <ShoppingCart NumberOfItems = {NumberOfItems} TotalCost = {TotalCost} />
        </div>
        <div  id='ShopButton' className='nav-bar-gridItem'>
        <a href="http://localhost:3000/ShopPage">Shop</a>
        </div>
      </div>
      <div id='app-body'>
        <RouteSwitch stateItemsChanger = {setNumber} stateCostChanger = {setTotalCost}/>
      </div>
  </div>
  );
}

export default App;
