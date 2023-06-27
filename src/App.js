import './App.css';
import RouteSwitch from './RouteSwitch';

function App() {
  return (
    <div className='App'>
      <div id='nav-bar'>
        <div id='HomeButton'>
          <a href="http://localhost:3000/HomePage">Home</a>
        </div>
        <div  id='ShopButton'>
        <a href="http://localhost:3000/ShopPage">Shop</a>
        </div>
      </div>
    <RouteSwitch />
  </div>
  );
}

export default App;
