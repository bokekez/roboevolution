import React from 'react';

const User = ({setLogedUser, logedUser, user, setLogedin, logedin}) => {
    console.log(user.username);
    debugger;
    const logout = () => {
        setLogedin(false);
        console.log(logedin)
    }
    if (user.username !== "" && logedin === true){
    return (
        <div>
            <h3 className='f7' style={{top: "1rem"}}>{user.username}</h3> 
            <input className='dim' style={{outline: 'none', height: '1rem', width: '3rem', cursor: 'pointer', borderRadius: '12px', fontSize: '0.5rem', textAlign: 'center'}} 
			onClick={logout} type="submit" value="Log out"/>
            </div>
        )
    }
    else if (logedin === false) {
        return (
            <div><h3 className='f7' style={{top: "1rem"}}>Not logged in</h3></div>
            )
        
    }

    
}

export default User;