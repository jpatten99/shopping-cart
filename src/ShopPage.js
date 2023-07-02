import "../src/Styles/ShopPage.css"
import Product from "./components/Product";

const ShopPage = () => {
  return (
    <div id="ShopPage-Container">
      <Product Title = "Reindeer Dog" src = "img/ivan1.JPG" myid = "1"/>
      <Product Title = "Hat Dog" src = "img/ivan2.jpg" myid = "2"/>
      <Product Title = "Hungry Dog" src = "img/ivan3.jpg" myid = "3"/>
      <Product Title = "Old Wise Dog" src = "img/ivan4.jpg" myid = "4"/>
    </div>
  );
};

export default ShopPage;