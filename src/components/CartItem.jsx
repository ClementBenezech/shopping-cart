import { useDispatch, useSelector } from "react-redux"
import Fade from "react-reveal"

const CartItem = (props) => {

    const data = (props.item);
    const dispatch = useDispatch();

    return (
        <Fade bottom>
            <div className = "shopping-cart__product">
                    
                    <img  src = {"./"+data.image+".png"} className = "shopping-cart__product__image"/>
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
}

export default CartItem

