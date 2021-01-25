
import React from 'react';

const Register = (user, setUser, porps, username, usermail, password) => {
    let userTemp = '';
    let mailTemp = '';
    let pwTemp = '';
    const nameChange = (event) => {
        userTemp = event.target.value
        console.log(username)
    }
    const mailChange = (event) => {
        mailTemp = event.target.value
        
    }
    const passwordChange = (event) =>{
        pwTemp = event.target.value
        
    }
    const submitValue = (e) => {
        e.preventDefault()
        const currentUser = {username : userTemp, usermail : mailTemp, password : pwTemp}
        
        console.log(currentUser);
        setUser(currentUser)
    }
    return (
        
        <article className="pa4 black-80">
        <form action="sign-up_submit" method="get" acceptCharset="utf-8">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
            <div className="mt3">
                <label className="db fw4 lh-copy f6">Username</label>
                <input className="b pa2 input-reset ba bg-transparent grow" value={username} type="username" name="user-name"  id="user-name" onChange={nameChange}/>
            </div>
            <div className="mt3">
                <label className="db fw4 lh-copy f6" >Email address</label>
                <input className="b pa2 input-reset ba bg-transparent grow" value={usermail} type="usermail" name="email-address"  id="email-address" onChange={mailChange}/>
            </div>
            <div className="mt3">
                <label className="db fw4 lh-copy f6" >Password</label>
                <input className="b pa2 input-reset ba bg-transparent grow" value={password} type="password" name="password"  id="password" onChange={passwordChange}/>
            </div>
            </fieldset>
            <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up" onClick={(e) => submitValue(e)}/></div>
        </form>
        </article>
    )
}

export default Register;