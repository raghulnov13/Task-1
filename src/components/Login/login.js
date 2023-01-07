import { useState } from 'react';
import './login.css'

function Login(props) {
    const [email, setEmail] =useState();
    const [password, setPassword] =useState();

    // [previousvalue, callbackfun]
    // synthetic values
    // two way data binding

    const emailHandler =(event) =>{
        setEmail(event.target.value);
    }

    const passwordHandler =(event) =>{
        setPassword(event.target.value);
    }

    const loginHandler =(event) =>{
        event.preventDefault();
        // console.log(email,password); 
        if (email && password){
            props.isLogIn(true);
        }
    }


    return(
        <div className="login">
        <form onSubmit={ loginHandler}>
        <label>Enter email:
            <input type="text" placeholder="email" value={email} onChange={emailHandler} />
        </label>

        <label>Enter password:
            <input type="text" placeholder="password" value={ password } onChange={ passwordHandler} />
        </label>

        <button>Submit</button>
    </form>
    </div>
    )
    
}
export default Login;