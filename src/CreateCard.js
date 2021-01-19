import React from 'react';

const CreateCard = ({generateCard, props, name, website, email, setName, setEmail, setWebsite}) => {
    const submitValue = () => {
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
            <input className='pa4-m outline tc' style={{width: '300'}}type="text" placeholder='New name here' onChange={e => setName(e.target.value)}/> {console.log(setName)}
            
            <label classname= ''>
                Email:</label>
            <input className='pa4-m outline tc' style={{width: '300'}} type="text" placeholder='New email here' onChange={e => setEmail(e.target.value)}/> {console.log(setName)}
            
            <label classname= ''>
                Website:</label>
            <input className='pa4-m outline tc' style={{width: '300'}} type="text" placeholder='New website here'onChange={e => setWebsite(e.target.value)}/> {console.log(setName)} 
            
            <button onClick={submitValue}>Submit</button>
        </form>
	</div>
    )
}

export default CreateCard;