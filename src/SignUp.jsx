import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {auth} from './FireBase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword( auth, email, pass);
            console.log("Account Created");
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className='SignUp-Container'>
            <form className='SignUp-Form' onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
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
                <button type='submit'>Sign Up</button>
                <p>Already have an account? <Link to='/login'>Log In</Link></p>
            </form>
        </div>
    )
}

export default SignUp
