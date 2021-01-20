import React from 'react';

const CreateCard = ({newCard, props, name, website, email, setName, setEmail, setWebsite, colorVar, id1, setId1, robots, setRobots}) => {
    const submitValue = (e) => {
        e.preventDefault()
        let id2 = id1 + 1;
        setId1(id1 +1);
        newCard.id = id2;
        newCard.newName = name;
        newCard.newEmail = email;
        newCard.newWebsite = website;
        console.log(newCard);
        setRobots(newCard => [...robots, newCard]);
        console.log(robots);
    }
    return(
	<div >
        <form className='flex flex-column items-center pa4' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <label className= 'tc'> 
                Name:</label >
            <input className={`pa4-m grow b--white outline tc ${colorVar}`} style={{width: '300'}}type="text" placeholder='New name here' onChange={e => setName(e.target.value)}/> 
            
            <label className= ''>
                Email:</label>
            <input className={`pa4-m grow b--white outline tc ${colorVar}`} style={{width: '300'}} type="text" placeholder='New email here' onChange={e => setEmail(e.target.value)}/> 
            
            <label className= ''>
                Website:</label>
            <input className={`pa4-m grow b--white outline tc ${colorVar}`} style={{width: '300'}} type="text" placeholder='New website here'onChange={e => setWebsite(e.target.value)}/> 
            
            <button className={`b ph2 pv2 input-reset ba b--white grow pointer f6 dib ${colorVar}`} style={{marginTop: '1.5rem'}} onClick={(e) => submitValue(e) }>Submit</button>
        </form>
	</div>
    )
}

export default CreateCard;