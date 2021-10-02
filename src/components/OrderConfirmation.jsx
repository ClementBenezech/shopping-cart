import { products } from './ProductsData';
import { useSelector, useDispatch } from "react-redux"
import store from "./Store";
import "./../styles/OrderConfirmation.scss"
import OrderItem from './OrderItem'
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';


const OrderConfirmation = () => {

    //getting the current cartContent
    const cartItems = state => state.cartProducts;
    const currentCartItems = useSelector(cartItems);

    let reactElementsArray = [];
        reactElementsArray = currentCartItems.map( data => {
                            return (
                                       <OrderItem item = {data}/> 
                                    )
                })

    return (
        <Zoom>
            <div className = "order-confirmation">
                <div className = "order-confirmation__top-container">
                    <i class="fas fa-ban"></i>
                    <div className = "order-confirmation__message">Sorry, but the following products have been removed from your Order:</div>
                </div>
                <div className = "order-confirmation__products-container">
                    {reactElementsArray}
                </div>
                <div className = "order-confirmation__text">Because, you know... You cannot buy people. At least not in this country. Nor Can you buy Skills. You have to patiently learn them. It takes time. </div>
                <div className = "order-confirmation__text">I took that time. Now, I got the Skills :)</div>
                <div className = "order-confirmation__text">You could still benefit from it though. Hire me for a week, a month, a year... whatever suits you. And me :)</div>
                <a href = "mailto:clement.benezech@gmail.com" className = "order-confirmation__checkout">Send me an email :)</a>
                <Link className = 'shopping-cart__checkout' to='/'>back to shop</Link>
            </div>
        </Zoom>


    )
}

export default OrderConfirmation