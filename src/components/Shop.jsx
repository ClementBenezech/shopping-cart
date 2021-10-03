/*import logo from './logo.svg';*/
/*import './../App.css';*/
import "./../styles/App.scss"
import Products from './Products';
import ShoppingCart from './ShoppingCart';
import LoginMenu from "./LoginMenu";


function Shop() {
  return (
      <fragment>
        <div className = "shop-container">
            <Products/>  
        </div>
        <LoginMenu/>
        <ShoppingCart/>
      </fragment>
      
  );
}

export default Shop;
