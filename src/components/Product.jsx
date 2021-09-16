import { useSelector, useDispatch } from "react-redux"
import store from "./Store";
import "./../styles/Product.scss"
import Zoom from 'react-reveal/Zoom';



const Product = (props) => {

    //getting the current cartContent
    const cartItems = state => state.cartProducts;
    const currentCartItems = useSelector(cartItems);

    const dispatch = useDispatch();
    let currentItemQuantity


    currentCartItems.map(data => {
        if (data.id == props.productData.id) {
            currentItemQuantity = "Already "+data.quantity+" in Cart"
        }
    })

        return(
            <div className = 'product' onClick = { () => {
                props.productData.quantity = 1
                dispatch({ type: 'product/addToCart', payload: props.productData})
                }}>
                <Zoom>
                    <img className = "product__image" src = {"./"+props.productData.image+".png"}/>
                </Zoom>
                <p className = "product__name">{props.productData.name}</p>
                <p className = "product__phrase">{props.productData.description}</p>
                
                <div className = 'product__buy-container'>
                <p className = "product__price">{props.productData.price}</p>
                    <div key = {props.productData.id} id = {props.productData.id } className = "product__buy">
                        <i class="fas fa-cart-arrow-down"></i>
                    </div>
                   
                </div>
                <div className = "product__cart-count">{currentItemQuantity}</div>
            </div>

        );

}
export default Product;