import { products } from './ProductsData';
import { useSelector, useDispatch } from "react-redux"
import store from "./Store";
import "./../styles/ShoppingCart.scss"
import Fade from 'react-reveal/Fade';

const ShoppingCart = () => {

    //getting the current cartContent
    const cartItems = state => state.cartProducts;
    const currentCartItems = useSelector(cartItems);
    console.log(currentCartItems);

    const dispatch = useDispatch();

        let totalCartAmount = 0;
        currentCartItems.map(data => {
             totalCartAmount = totalCartAmount + (data.price * data.quantity) 
        })

        let reactElementsArray = [];
        reactElementsArray = currentCartItems.map( data => {
                            return (
                                <Fade bottom>
                                    <div className = "shopping-cart__product">
                                            
                                            <img  src = {"/"+data.image+".png"} className = "shopping-cart__product__image"/>
                                            <div className = "shopping-cart__product__name">{data.name}</div>
                                            <div className = "shopping-cart__product__quantity-container">
                                                <button className = "shopping-cart__product__decrement" /*key = {data.id} id = {data.id }*/ onClick = { () => {
                                                        dispatch({ type: 'product/decrement', payload: data})
                                                        }}><i class="far fa-minus-square"></i>
                                                </button>
                                                <div className = "shopping-cart__product__quantity">{data.quantity}</div>
                                                <button className = "shopping-cart__product__increment" /*key = {data.id} id = {data.id }*/ onClick = { () => {
                                                        dispatch({ type: 'product/increment', payload: data})
                                                        }}><i class="far fa-plus-square"></i>
                                                </button>
                                            </div>
                                            <div className = "shopping-cart__product__unit-price">{data.price}</div>
                                            <div className = "shopping-cart__product__global-price">{data.quantity * data.price}</div>
                                            <div className = "shopping-cart__product__remove" key = {data.id} id = {data.id } onClick = { () => {
                                                    dispatch({ type: 'product/removeFromCart', payload: data})
                                                    }}><i class="far fa-trash-alt"></i>
                                            </div>
                                           
                                    </div>
                                    </Fade>
                                    )
                })
    return (
        <div className = "shopping-cart">
                    <div className = "shopping-cart__product-label">
                        <div className = "shopping-cart__product__name">Name</div>
                        <div className = "shopping-cart__product-label__quantity">Qty</div>
                        <div className = "shopping-cart__product__unit-price">Price</div>
                        <div className = "shopping-cart__product__global-price">Total</div>
                    </div>
                    <div className = "shopping-cart__products-container">{reactElementsArray}</div>
                    <div className = "shopping-cart__total-container">
                        <div className = "shopping-cart__total-label"> Total Amount in basket</div>
                        <div className = "shopping-cart__total-price">{totalCartAmount}</div>
                    </div>
                    <a href = "mailto:clement.benezech@gmail.com" className = "shopping-cart__checkout">Order Now!</a>
        </div>

    )

}
export default ShoppingCart