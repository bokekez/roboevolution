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
        <div className='tc' style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
            <h3 className='f7' style={{top: "1rem"}}>{user.username}</h3> 
            <input className='tc dim bg-transparent hover-white ' style={{outline: 'none', height: '0.8rem', width: '3rem', cursor: 'pointer', borderColor: 'transparent', fontSize: '0.5rem'}} 
			onClick={logout} type="submit" value="Log out"/>
            </div>
        )
    }
    else if (logedin === false) {
        return (
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}><h3 className='f7' style={{top: "1rem"}}>Not logged in</h3></div>
            )
        
    }

    
}

export default User;