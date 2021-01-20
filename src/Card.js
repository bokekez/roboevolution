import React, { useState, useEffect } from 'react';

const Card = (props, theme, newCard,) =>{
	const {newName, newEmail, newWebsite, id } = props
	console.log(newName);
	if (props.theme === 'light')
	{
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 black'>
			<img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2 className='f5'>{newName}</h2>
				<p className='f6'>{newEmail}</p>
				<p2 className='f6'>{newWebsite}</p2>
				{console.log(newName)}
			</div>
		</div>
	)
	}
	else if (props.theme === 'dark') {
		return (
		<div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 black'>
			<img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2 className='f5'>{newName}</h2>
				<p className='f6'>{newEmail}</p>
				<p2 className='f6'>{newWebsite}</p2>
			</div>
		</div>
	)
	}
	else if (props.theme === 'gray') {
		return (
		<div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5 black'>
			<img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2 className='f5'>{newName}</h2>
				<p className='f6'>{newEmail}</p>
				<p2 className='f6'>{newWebsite}</p2>
			</div>
		</div>
	)
	}
	else {
		return (
		<div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2 className='f5'>{newName}</h2>
				<p className='f6'>{newEmail}</p>
				<p2 className='f6'>{newWebsite}</p2>
			</div>
		</div>
	)
	}
}


// 	const { name, email, website, id } = props;
// 	if (props.theme === 'light')
// 	{
// 	return (
// 		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 black'>
// 			<img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
// 			<div>
// 				<h2 className='f5'>{name}</h2>
// 				<p className='f6'>{email}</p>
// 				<p2 className='f6'>{website}</p2>
// 			</div>
// 		</div>
// 	)
// 	}
// 	else if (props.theme === 'dark') {
// 		return (
// 		<div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 black'>
// 			<img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
// 			<div>
// 				<h2 className='f5'>{name}</h2>
// 				<p className='f6'>{email}</p>
// 				<p2 className='f6'>{website}</p2>
// 			</div>
// 		</div>
// 	)
// 	}
// 	else if (props.theme === 'gray') {
// 		return (
// 		<div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5 black'>
// 			<img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
// 			<div>
// 				<h2 className='f5'>{name}</h2>
// 				<p className='f6'>{email}</p>
// 				<p2 className='f6'>{website}</p2>
// 			</div>
// 		</div>
// 	)
// 	}
// 	else {
// 		return (
// 		<div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
// 			<img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
// 			<div>
// 				<h2 className='f5'>{name}</h2>
// 				<p className='f6'>{email}</p>
// 				<p2 className='f6'>{website}</p2>
// 			</div>
// 		</div>
// 	)
// 	}
// }

export default Card;
