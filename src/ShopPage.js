import "../src/Styles/ShopPage.css"
import Product from "./components/Product";

const ShopPage = (props) => {
  return (
    <div id="ShopPage-Container">
      <Product Title = "Reindeer Dog" src = "img/ivan1.JPG" myid = "1" cost = {1} stateItemsChanger = {props.stateItemsChanger} stateCostChanger = {props.stateCostChanger}/>
      <Product Title = "Hat Dog" src = "img/ivan2.jpg" myid = "2" cost = {2} stateItemsChanger = {props.stateItemsChanger} stateCostChanger = {props.stateCostChanger}/>
      <Product Title = "Hungry Dog" src = "img/ivan3.jpg" myid = "3" cost = {3} stateItemsChanger = {props.stateItemsChanger} stateCostChanger = {props.stateCostChanger}/>
      <Product Title = "Old Wise Dog" src = "img/ivan4.jpg" myid = "4" cost = {4} stateItemsChanger = {props.stateItemsChanger} stateCostChanger = {props.stateCostChanger}/>
    </div>
  );
};

export default ShopPage;