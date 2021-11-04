import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { auth } from './config';

export function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SignUp = (event) => {
        event.preventDefault();
    
        auth
          .SignUpWithEmailAndPassword(email, password)
          .catch((error) => alert(error.message));
    };
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if (authUser) {
             let user = JSON.stringify(authUser);
              if (!localStorage.getItem('StockAdmin')) {
                localStorage.setItem('StockAdmin',user)                  
              }
            localStorage.setItem('StockAdmin',user)
          } else {
            localStorage.setItem('StockAdmin',null)
          }
        });
        return () => {
          unsubscribe();
        };
    }, [email]);
    
    return (
        <div className="login-page">
            <div className="form">
                <form className="login-form">
                <input type="text" placeholder="E-mail"  value={email}
              onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" onClick={SignUp}>SignUp</button>
                <p className="message">Already Have Account? <Link to="/">Login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default SignUp
