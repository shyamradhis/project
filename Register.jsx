import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [fname, setfName] = useState('');
    const [confirmpass, setConfirmpass] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <box>
        <div className="auth-form-container">
            <h1>SCHEDULE ONCE</h1>
            <h2>SIGN UP</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="fname">FULL NAME</label>
            <input value={fname} name="fname" onChange={(e) => setfName(e.target.value)} id="fname" required="required" />
            <label htmlFor="email">EMAIL</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email"  id="email" name="email" required />
            <label htmlFor="password">PASSWORD</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
            
            <label htmlFor="cpnformpass">CONFORM PASSWORD</label>
            <input value={confirmpass} name="conformpass" onChange={(e) => setConfirmpass(e.target.value)} id="conformpass" required/>
            <button  type="submit"    onClick={() => props.onFormSwitch('login')} >Sign up</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    </box>
    )
}