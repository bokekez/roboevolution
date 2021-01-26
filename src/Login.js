import React from 'react';

const Login = ({user, setUser, porps, username, usermail, password, setRoute, setLogedin, logedin, userStore}) => {
    console.log(userStore);
    const [userCheck, setUsercheck] = React.useState([])
    const [warning, setWarning] = React.useState("")
    let mailTemp = '';
    let pwTemp = '';
    const mailChange = (event) => {
        mailTemp = event.target.value   
    }
    const passwordChange = (event) =>{
        pwTemp = event.target.value  
    }
    const submitValue = (e) => {
        e.preventDefault();
        const currentUser = {usermail : mailTemp, password : pwTemp}  
        console.log(currentUser, '23');
        setUsercheck(currentUser);
        userStore.map((user) => {   
            if(user.usermail === currentUser.usermail && user.password === currentUser.password) {
                console.log(logedin);
                setLogedin(true);
                //setRoute('home'); 
            }
            else {
                console.log(logedin, 'f');
                setLogedin(false);    
        }})
        // userStore.map(user => {
        //     //const {usermail, password} = user
        //     if(user.usermail === mailTemp && user.password === pwTemp){
        //     return ( setLogedin(true) && setRoute('home'))
        //     }
        //   })

        // const checkUser = userStore.some(user =>  userStore.usermail === mailTemp)
        // if (checkUser === true){
        //     setLogedin(true);
        //     console.log(logedin);
        //     setRoute('home');
        // } 
        // else return warning;

        // const checkUser = userStore.includes(userCheck.usermail)
        //console.log(checkUser);
        //if(user.usermail == userCheck.usermail && user.password == userCheck.password) {
        // const user = userStore.filter(user => user.usermail === mailTemp && user.password === pwTemp)
        //     if(user){
        //     setLogedin(true)
        //     console.log(logedin);
        //     }
        //     setLogedin(false)
        //     console.log(logedin);
        // function containsObject  (mailTemp, userStore, pwTemp ) => {
        //     var i;
        //     for (i = 0; i < userStore.length; i++) {
        //         if (userStore.usermail[i] === mailTemp && userStore.password[i] === pwTemp) {
        //             return setLogedin(true);
        //         }
        //     }
        
        //     return setLogedin(false);;
        // }
        
    }
    return (
        <main className="pa4 black-80">
        <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            {/* <legend className="tc f4 fw6 ph0 mh0">Sign In</legend> */}
            <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                <input className="grow b pa2 input-reset ba bg-transparent hover-bg-black hover-white "  name="email-address"  id="email-address" onChange={mailChange}/>
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">Password</label>
                <input className="grow b pa2 input-reset ba bg-transparent hover-bg-black hover-white " type="password" name="password"  id="password" onChange={passwordChange}/>
            </div>
            </fieldset>
            <div className="">
            <input className="grow b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={(e) => submitValue(e)}/>
            </div>
        </form>
        </main>
    )
}

export default Login;