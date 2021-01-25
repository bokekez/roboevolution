import React from 'react';

const CreateCard = ({setLastCard, newCard, props, name, website, email, setName, setEmail, setWebsite, colorVar, id1, setId1, robots, setRobots, setNewRobots, newRobots, newName, id, newEmail, newWebsite, setNewCard}) => {
    const [nameError, setNameError] = React.useState("")
    const [emailError, setEmailError] = React.useState("")
    const [websiteError, setWebsiteError] = React.useState("")
    
    const submitValue = (e) => {
        e.preventDefault()
        const isValid = validate();
        if (isValid === true)
        {
            //let id2 = id1 + 1;
        // setId1(id1 +1);
        id1 = Math.floor(Math.random() * (1000 - 0 + 1));

        const currentNewCard = {id: id1, newName: name, newEmail: email, newWebsite: website}
        setNewCard(currentNewCard)
        setRobots([...robots, currentNewCard]);
        console.log(robots);
        // setLastCard(currentNewCard);
        setEmailError("");
        setNameError("");
        setWebsiteError("");
        }
        
    };
    function validate (nameError, emailError, websiteError) {
        // if (!name.charAt(0) !== name.charAt(0).toUpperCase){
        //     setNameError('First latter of the name must be uppercase');
        //     return false;
        // }

        // if (nameError) {
        //     //setEmailError(true);
        //     return false;
        // }
        if (name.includes(' ')){
            setNameError('Robots can only have one name');
            return false;
        }

        if (nameError) {
            //setEmailError(true);
            return false;
        }

        if (!email.includes('@')){
            setEmailError('invalid email');
            return false;
        }

        if (emailError) {
            //setEmailError(true);
            return false;
        }
        return true;
    };
    return(
	<div >
        <form className='flex flex-column items-center pa4' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <label className= 'tc'> 
                Name:</label >
            <input id='inputName' className={`pa4-m grow b--white outline tc ${colorVar}`} style={{width: '300'}}type="text" placeholder='New name here' onChange={e => setName(e.target.value)}/>        
            {
                nameError ? (<div style={{font: "8", color: "red"}}>
                    {nameError}
                </div>): null
            }
            <label className= ''>
                Email:</label>
            <input id='inputEmail' className={`pa4-m grow b--white outline tc ${colorVar}`} style={{width: '300'}} type="text" placeholder='New email here' onChange={e => setEmail(e.target.value)}/>     
            {
                emailError ? (<div style={{font: "8", color: "red"}}>
                    {emailError}
                </div>): null
            }
            <label className= ''>
                Website:</label>
            <input id='inputWebsite' className={`pa4-m grow b--white outline tc ${colorVar}`} style={{width: '300'}} type="text" placeholder='New website here'onChange={e => setWebsite(e.target.value)}/> 
            {
                websiteError ? (<div style={{font: "8", color: "red"}}>
                    {websiteError}
                </div>): null
            }
            <button className={`b ph2 pv2 input-reset ba b--white grow pointer f6 dib ${colorVar}`} style={{marginTop: '1.5rem'}} onClick={(e) => submitValue(e) }>Submit</button> 
        </form>
	</div>
    )
}

export default CreateCard;