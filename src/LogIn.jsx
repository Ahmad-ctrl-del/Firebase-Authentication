import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {auth} from './FireBase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword( auth, email, pass);
            console.log("Logged In Successfully");
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className='SignUp-Container'>
            <form className='SignUp-Form' onSubmit={handleSubmit}>
                <h2>Log In</h2>
                <label htmlFor='email'>
                    Email:
                    <br/>
                    <input type='text' onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <br/>
                <label htmlFor='password'>
                    Password:
                    <br/>
                    <input type='password' onChange={(e) => setPass(e.target.value)}/>
                </label>
                <br/>
                <button type='submit'>Log In</button>
                <p>Don't have an account? <Link to='/signUp'>Register</Link></p>
            </form>
        </div>
    )
}

export default LogIn
