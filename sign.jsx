import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <box>
        <div className="auth-form-container">
            
           <b> <h1>SCHEDULE ONCE</h1></b>
            <h2>LOGIN</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">EMAIL</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" id="email" name="email" />
                <label htmlFor="password">PASSWORD</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password"  id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? sign up here.</button>
        </div>

        </box>
    )
}