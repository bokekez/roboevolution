import React from 'react';
import Card from './Card';

const CardList = ({ robots, theme, newCard, setRobots }) =>{
	//setRobots.push(newCard);
	
	// setRobots(newCard => [...newCard, newElement]);
	
	const cardComponent = robots.map((robot, i) => {
		return <Card theme={theme} key={i} id={newCard[i].id} newName={newCard[i].newName} newEmail={newCard[i].newEmail} newWebsite={newCard[i].newWebsite}/> 
	})
	return(
	<div >
		{cardComponent}
    </div>

	);


	// const cardComponent = robots.map((user, i) => {
	// 	return <Card theme={theme} key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} website={robots[i].website}/>
	// })
	// return(
	// <div >
	// 	{cardComponent}
    // </div>

	// );
}

export default CardList;