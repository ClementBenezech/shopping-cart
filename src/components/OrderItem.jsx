import { useDispatch, useSelector } from "react-redux"
import Fade from "react-reveal"
import "./../styles/OrderConfirmation.scss"

const OrderItem = (props) => {

    const data = (props.item);
    const dispatch = useDispatch();

    return (
        <Fade bottom>
            <div className = "order-confirmation__product">
                    
                    <img  src = {"./"+data.image+".png"} className = "order-confirmation__product__image"/>
                    <div className = "order-confirmation__product__name">{data.name}</div>                   
            </div>
            </Fade>
            )
}

export default OrderItem

