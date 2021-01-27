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
        <div className='tc' style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <h3 className='f7' >{user.username}</h3>
            <input className='dim  hover-white ' style={{outline: 'none', height: '0.8rem', width: '3rem', cursor: 'pointer', borderColor: 'transparent', fontSize: '0.5rem'}} 
			onClick={logout} text="Log out" type="submit" value="Log out"/>
        </div>
        )
    }
    else if (logedin === false) {
        return (
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}><h3 className='f7' style={{ height: '0.8rem'}}>Not logged in</h3></div>
            )
        
    }

    
}

export default User;