import React from 'react';
import Card from './Card';

const CardList = ({ robots, theme, newCard, setRobots,newRobots, setNewRobots }) =>{
	//setRobots.push(newCard);
	
	// setRobots(newCard => [...newCard, newElement]);

	// const cardComponent = newCard.map((user, i) => {
	// // 	//return <Card theme={theme} key={i} id={robots[i].id} newName={robots[i].newName} newEmail={robots[i].newEmail} newWebsite={robots[i].newWebsite}/> 
 	//  return <Card theme={theme} key={i} id={newCard[i].id} newName={newCard[i].newName} newEmail={newCard[i].newEmail} newWebsite={newCard[i].newWebsite}/> 
 	// // return <Card theme={theme} key={i} id={newCard[i].id} newName={newCard[i].newName} newEmail={newCard[i].newEmail} newWebsite={newCard[i].newWebsite}/> 
	//  })
	// console.log(robots);

	// const cardComponent = newRobots.map((user, i) => {
	// 	//return <Card theme={theme} key={i} id={robots[i].id} newName={robots[i].newName} newEmail={robots[i].newEmail} newWebsite={robots[i].newWebsite}/> 
	// 	 return <Card theme={theme} key={i} id={robots[i].id} newName={robots[i].newName} newEmail={robots[i].newEmail} newWebsite={robots[i].newWebsite}/> 
	// 	// return <Card theme={theme} key={i} id={newCard[i].id} newName={newCard[i].newName} newEmail={newCard[i].newEmail} newWebsite={newCard[i].newWebsite}/> 
	// })
	// console.log(robots);

	const cardComponent = robots.map((user, i) => {
		//return <Card theme={theme} key={i} id={robots[i].id} newName={robots[i].newName} newEmail={robots[i].newEmail} newWebsite={robots[i].newWebsite}/> 
		 return <Card theme={theme} key={i} id={robots[i].id} newName={robots[i].newName} newEmail={robots[i].newEmail} newWebsite={robots[i].newWebsite}/> 
		// return <Card theme={theme} key={i} id={newCard[i].id} newName={newCard[i].newName} newEmail={newCard[i].newEmail} newWebsite={newCard[i].newWebsite}/> 
	})
	console.log(robots);

 

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