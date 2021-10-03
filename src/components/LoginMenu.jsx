import "../styles/LoginMenu.scss"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { useState } from "react";



const LoginMenu = () => {

    //getting the current UserName and status
    const storeUserName = state => state.user.fullName;
    const currentUserName = useSelector(storeUserName);

    const dispatch = useDispatch()

    /*Setting up hooks for fields
    These will be used to maintain a state for the form and allow the send function to work its magic*/
    const [userName, setUserName] = useState("");

    //If user is not authentified, then display the login form (here it is just a simple field to enter a name)
    if (currentUserName !== null) {
        //If the user is connected, we display its name and a log out button
        return          <div className = "login-menu">
                                <div className = "login-menu__welcome-message">{"Welcome, "+currentUserName}</div>
                                <button className = "login-menu__logout" onClick = { () => {
                                    dispatch({type : "user/PutUserNameInState", payload: null})
                                }}><i class="fas fa-power-off"></i></button>
                                <div className = "login-menu__catchphrase">{"Add some Skills, and place your order :)"}</div>
                        </div>
    }
    else {
        //If the user is not connected, we display the login form. when submitted, it is written in the state using dispatch
        return          <div className = "login-menu">
                            <form className = "login-menu__login-form" onSubmit = { (e) => {
                                e.preventDefault()
                                if (userName) {
                                    dispatch({type : "user/PutUserNameInState", payload: userName})
                                }
                                }
                            }>
                                <label>Please enter your name</label>
                                <input id = "userName" onChange = {e => {
                                    setUserName(e.target.value)
                                } }></input>
                                <button className = "login-menu__login"><i class="fas fa-sign-in-alt"></i></button>
                            </form>
                        </div>
                
    }
    }

  
export default LoginMenu