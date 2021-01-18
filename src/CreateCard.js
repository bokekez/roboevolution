import React from 'react';

const CreateCard = ({generateCard, props, name, website, email, setName}) => {
    // const handleSubmit = (event) => {
    //      event.preventDefault();
    // }
    const handleInput = (event) => {
        
        // event => setName(event.target.value);
        setName = (event.target.value);
        console.log(event)
        console.log(event.target.name)
    }
    return(
	<div className='measure items-center mb2'>
        <form className='measure pa4 input-reset'>
            <label classname= 'measure'> 
                Name:
            <input className='ba measure' type="text" placeholder='New name here' onSubmit={handleInput} />
            </label >
            <label classname= 'measure'>
                Email:
            <input className='ba measure' type="text" placeholder='New email here' />
            </label>
            <label classname= 'measure'>
                Website:
            <input className='ba measure' type="text" placeholder='New website here' />
            </label>
            <input onClick={handleInput} type="submit" value="Submit"/>
        </form>
	</div>
    )
}

export default CreateCard;