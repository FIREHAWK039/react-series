import React from 'react';
import { useState,useContext } from 'react';
import userContext from '../../Context/userContext';
function Login() {
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')

    const setUser = useContext(userContext)


    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})

    }
    return (  
        <div>
            <h2>Login  </h2>
            <input type="text"
            value={username} 
            onChange={(e) =>
                setUsername(e.target.value)
            }            
            placeholder='username' />
            <input type="text" placeholder='password' />
            <button onClick={handleSubmit}></button>
        </div>
    );
}

export default Login;