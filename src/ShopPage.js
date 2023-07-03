import "../src/Styles/ShopPage.css"
import Product from "./components/Product";

const ShopPage = (props) => {
  return (
    <div id="ShopPage-Container">
      <Product Title = "Reindeer Dog - $20" src = "img/ivan1.JPG" myid = "1" cost = {20} stateItemsChanger = {props.stateItemsChanger} stateCostChanger = {props.stateCostChanger}/>
      <Product Title = "Hat Dog - $15" src = "img/ivan2.jpg" myid = "2" cost = {15} stateItemsChanger = {props.stateItemsChanger} stateCostChanger = {props.stateCostChanger}/>
      <Product Title = "Hungry Dog - $5" src = "img/ivan3.jpg" myid = "3" cost = {5} stateItemsChanger = {props.stateItemsChanger} stateCostChanger = {props.stateCostChanger}/>
      <Product Title = "Old Wise Dog - $100" src = "img/ivan4.jpg" myid = "4" cost = {100} stateItemsChanger = {props.stateItemsChanger} stateCostChanger = {props.stateCostChanger}/>
    </div>
  );
};

export default ShopPage;