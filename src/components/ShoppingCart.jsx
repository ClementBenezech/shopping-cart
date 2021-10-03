import { products } from './ProductsData';
import { useDispatch, useSelector} from "react-redux"
import store from "./Store";
import "./../styles/ShoppingCart.scss"
import CartItem from './CartItem';
import { Link } from "react-router-dom";
import CountUp from 'react-countup';

const ShoppingCart = () => {

    const dispatch = useDispatch();

    //getting the current cartContent
    const cartItems = state => state.cartProducts;
    const currentCartItems = useSelector(cartItems);

    const storeUserName = state => state.user.fullName;
    const currentUserName = useSelector(storeUserName);

        let totalCartAmount = 0;
        currentCartItems.map(data => {
             totalCartAmount = totalCartAmount + (data.price * data.quantity) 
        })

        let orderLink = null;

        //Activating the orderLink button only if the cart is not empty
        if (totalCartAmount > 0) {
            if (currentUserName != null) {
             orderLink = <Link className = 'shopping-cart__checkout' to='/order-confirmation'>order now!</Link>
            } else {
             orderLink = <div className = 'shopping-cart__checkout shopping-cart__checkout--inactive'>Enter your name to order!</div>
            }
        }

        let reactElementsArray = [];
        reactElementsArray = currentCartItems.map( data => {
                            return (
                                       <CartItem item = {data}/> 
                                    )
                })
    return (
        <div className = "shopping-cart">
                    <div className = "shopping-cart__product-label">
                        <div className = "shopping-cart__product-label__name">Name</div>
                        <div className = "shopping-cart__product-label__quantity">Qty</div>
                        <div className = "shopping-cart__product-label__unit-price">Price</div>
                        <div className = "shopping-cart__product__global-price">Total</div>
                        <div className = "shopping-cart__product-label__remove" onClick = { () => {
                            dispatch({ type: 'cart/empty', payload: null})
                            }}><i class="far fa-trash-alt"></i>
                    </div>
                    </div>
                    <div className = "shopping-cart__products-container">{reactElementsArray}</div>
                    <div className = "shopping-cart__total-container">
                        <div className = "shopping-cart__total-label"> Total Amount in basket</div>
                        <CountUp
                                className = "shopping-cart__total-price"
                                start={0}
                                end={totalCartAmount}
                                duration={1}/>
                        {/*<div className = "shopping-cart__total-price">{totalCartAmount}</div>*/}
                    </div>
                    {orderLink}
                    
        </div>

    )

}
export default ShoppingCart