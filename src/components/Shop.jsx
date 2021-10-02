/*import logo from './logo.svg';*/
/*import './../App.css';*/
import "./../styles/App.scss"
import Products from './Products';
import ShoppingCart from './ShoppingCart';


function Shop() {
  return (
      <fragment>
        <div className = "shop-container">
            <Products/>  
        </div>
        <ShoppingCart/>
      </fragment>
      
  );
}

export default Shop;
