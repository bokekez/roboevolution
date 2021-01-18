import React from 'react';

const CreateCard = ({generateCard, props, name, website, email, setName}) => {
    // const handleSubmit = (event) => {
    //      event.preventDefault();
    // }
    const handleInput = (event) => {
        console.log(event)
        console.log(event.target.name)
        // event => setName(event.target.value);
    }
    return(
	<div className='measure items-center mb2'>
        <form className='pa4 input-reset'>
            <label>
                Name:
            <input className='ba' type="text" placeholder='New name here' onChange={event => setName(event.target.value)} />
            </label>
            <label>
                Email:
            <input className='ba' type="text" placeholder='New email here' />
            </label>
            <label>
                Website:
            <input className='ba' type="text" placeholder='New website here' />
            </label>
            <button>Submit</button>
        </form>
	</div>
    )
}

export default CreateCard;