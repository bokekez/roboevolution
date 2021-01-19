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
	<div className= 'flex flex-column items-center mb2'>
        <form className='flex flex-column items-center pa4'>
            <label classname= 'tc'> 
                Name:
            <input className='pa3 outline tc' type="text" placeholder='New name here' onChange={e => setName(e.target.value)}/> {console.log(setName.value)}
            </label >
            <label classname= ''>
                Email:
            <input className='pa3 outline tc' type="text" placeholder='New email here' onChange={e => setEmail(e.target.value)}/> {console.log(setName.value)}
            </label>
            <label classname= ''>
                Website:
            <input className='pa3 outline tc' type="text" placeholder='New website here'onChange={e => setWebsite(e.target.value)}/> {console.log(setName.value)} 
            </label>
            <button onClick={submitValue}>Submit</button>
        </form>
	</div>
    )
}

export default CreateCard;