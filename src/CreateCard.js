import React from 'react';

const CreateCard = ({generateCard, props, name, website, email, setName}) => {
    // const handleSubmit = (event) => {
    //      event.preventDefault();
    // }
    const handleInput = (event) => {
        
        // event => setName(event.target.value);
        setName(event.target.value);
        console.log(event)
        console.log(event.target.name)
    }
    return(
	<div className= 'flex flex-column items-center mb2'>
        <form className='flex flex-column column-gap items-center pa4 input-reset'>
            <label classname= 'tc'> 
                Name:
            <input className='pa3 outline tc' type="text" placeholder='New name here' onSubmit={handleInput} />
            </label >
            <label classname= ''>
                Email:
            <input className='pa3 outline tc' type="text" placeholder='New email here' />
            </label>
            <label classname= ''>
                Website:
            <input className='pa3 outline tc' type="text" placeholder='New website here' />
            </label>
            <input onClick={handleInput} type="submit" value="Submit"/>
        </form>
	</div>
    )
}

export default CreateCard;