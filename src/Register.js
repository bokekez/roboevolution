import React from 'react';

const Register = ({user, setUser, porps, username, usermail, password, setRoute}) => {
    // const [userTemp, setUserTemp] = React.useState("")
    // const [mailTemp, setMailTemp] = React.useState("")
    // const [pwTemp, setPwTemp] = React.useState("")
    let userTemp = '';
    let mailTemp = '';
    let pwTemp = '';
    let userError = '';
    let mailError = '';
    let pwError = '';
    const nameChange = (event) => {
        userTemp = event.target.value
        console.log(userTemp)
    }
    const mailChange = (event) => {
        mailTemp = event.target.value   
    }
    const passwordChange = (event) =>{
        pwTemp = event.target.value  
    }
    const submitValue = (e) => {
        e.preventDefault();
        const isValidName = validateName();
        const isValidEmail = validateEmail();
        const isValidPassword = validatePassword();
        if (isValidName === true && isValidEmail === true && isValidPassword === true)
        {
            const currentUser = {username : userTemp, usermail : mailTemp, password : pwTemp}  
            console.log(currentUser);
            setUser(currentUser);
            userError = '';
            mailError = '';
            pwError = '';
            userTemp = '';
            mailTemp = '';
            pwTemp = '';
            // setRoute('home');
        }
    }
    function validateName (userError) {
        if (userTemp === '') {
            userError = 'Field can not be empty';
            return false;
        }
        if (userTemp.includes(' ')){
            userError = 'Users can only have one name';
            return false;
        }

        if (userError) {
            
            return false;
        }
        return true;
    }    
    function validateEmail (mailError) {
        if (mailTemp === '') {
            mailError = 'Field can not be empty';
            return false;
        }
        if (mailTemp.includes(' ')){
            mailError = 'Invalid email';
            return false;
        } 
 
        if (!mailTemp.includes('@')){
            mailError = 'Invalid email';
            return false;
        }

        if (!mailTemp.includes('.')){
            mailError = 'Invalid email';
            return false;
        }

        if (mailError) {
            return false;
        }
        return true;
    }
    function validatePassword (pwError) {
        if (pwTemp === '') {
            pwError = 'Field can not be empty';
            return false;
        }
        if (pwTemp.includes(' ')){
            pwError = 'Invalid character';
            return false;
        }

        if (pwError) {
            
            return false;
        }
        return true;
    }  
    return (
        <article className="pa4 black-80">
        <form action="sign-up_submit" method="get" acceptCharset="utf-8">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
            <div className="mt3">
                <label className="db fw4 lh-copy f6">Username</label>
                <input className="b pa2 input-reset ba bg-transparent grow"  type="text" id="user-name" onChange={nameChange}/>
            </div>
                {
                userError === false ? (<div style={{fontSize: "6", color: "red"}}>
                    {userError}
                </div>): null
                }
            <div className="mt3">
                <label className="db fw4 lh-copy f6" >Email address</label>
                <input className="b pa2 input-reset ba bg-transparent grow"  type="text" id="email-address" onChange={mailChange}/>
            </div>
                 {
                mailError === false ? (<div style={{fontSize: "6", color: "red"}}>
                    {mailError}
                </div>): null
                }
            <div className="mt3">
                <label className="db fw4 lh-copy f6" >Password</label>
                <input className="b pa2 input-reset ba bg-transparent grow"  type="text" id="password" onChange={passwordChange}/>
            </div>
                {
                pwError === false ? (<div style={{fontSize: "6", color: "red"}}>
                    {pwError}
                </div>): null
                }
            </fieldset>
            <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up" onClick={(e) => submitValue(e)}/></div>
        </form>
        </article>
    )
}

export default Register;