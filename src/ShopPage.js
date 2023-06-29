import "../src/Styles/ShopPage.css"
import Product from "./components/Product";

const ShopPage = () => {
  return (
    <div id="ShopPage-Container">
      <Product Title = "Reindeer Dog" src = "img/ivan1.JPG"/>
      <Product Title = "Hat Dog" src = "img/ivan2.jpg"/>
      <Product Title = "Hungry Dog" src = "img/ivan3.jpg"/>
      <Product Title = "Old Wise Dog" src = "img/ivan4.jpg"/>
    </div>
  );
};

export default ShopPage;