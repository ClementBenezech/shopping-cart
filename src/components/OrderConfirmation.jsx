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

    const storeUserName = state => state.user.fullName
    const currentUserName = useSelector(storeUserName)

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
                    <i class="far fa-sad-tear"></i>
                    <div className = "order-confirmation__message">I'm very sorry <span className = "order-confirmation__user-name">{currentUserName}</span> but the following products have been removed from your Order:</div>
                </div>
                <div className = "order-confirmation__products-container">
                    {reactElementsArray}
                </div>
                <div className = "order-confirmation__text">Because, you know... You cannot buy people. At least not in this country. Nor Can you buy Skills. You have to patiently learn them. It takes time. </div>
                <div className = "order-confirmation__text">I took that time. Now, I got the Skills :)</div>
                <div className = "order-confirmation__text">You could still benefit from it though. Hire me for a week, a month, a year... whatever suits you. And me :)</div>
                <div className = "order-confirmation__checkout">
                    <a href = "./clement_benezech_EN.pdf" className = "order-confirmation__contact-item-container"><i class="far fa-file-pdf"></i><div>Download Resume (EN)</div></a>
                    <a href = "./clement_benezech_FR.pdf" className = "order-confirmation__contact-item-container"><i class="far fa-file-pdf"></i><div>Télécharger CV (FR)</div></a>
                    <a href = "mailto:clement.benezech@gmail.com" className = "order-confirmation__contact-item-container"><i class="far fa-paper-plane"></i><div>Send me an email</div></a>
                    <a href = "https://www.linkedin.com/in/clementbenezech/" className = "order-confirmation__contact-item-container"><i class="fab fa-linkedin"></i><div>Visit my profile!</div></a> 
                </div>

                <Link className = 'order-confirmation__checkout' to='/'>back to shop</Link>
            </div>
        </Zoom>


    )
}

export default OrderConfirmation