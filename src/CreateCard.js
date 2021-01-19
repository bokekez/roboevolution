import React from 'react';

const CreateCard = ({generateCard, props, name, website, email, setName, setEmail, setWebsite, colorVar}) => {
    const submitValue = (e) => {
        e.preventDefault()
        const newCard = {
            'newName': name,
            'newEmail': email,
            'newWebsite': website
        }
        console.log(newCard);
    }
    return(
	<div >
        <form className='flex flex-column items-center pa4' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <label classname= 'tc'> 
                Name:</label >
            <input className={`pa4-m grow outline tc ${colorVar}`} style={{width: '300'}}type="text" placeholder='New name here' onChange={e => setName(e.target.value)}/> 
            
            <label classname= ''>
                Email:</label>
            <input className={`pa4-m grow outline tc ${colorVar}`} style={{width: '300'}} type="text" placeholder='New email here' onChange={e => setEmail(e.target.value)}/> 
            
            <label classname= ''>
                Website:</label>
            <input className={`pa4-m grow outline tc ${colorVar}`} style={{width: '300'}} type="text" placeholder='New website here'onChange={e => setWebsite(e.target.value)}/> 
            
            <button className={`b ph2 pv2 input-reset ba b--black grow pointer f6 dib ${colorVar}`} style={{marginTop: '1.5rem'}} onClick={(e) => submitValue(e) }>Submit</button>
        </form>
	</div>
    )
}

export default CreateCard;