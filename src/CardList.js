import React from 'react';
import Card from './Card';

const CardList = ({ robots, theme }) =>{
	const cardComponent = robots.map((user, i) => {
		return <Card theme={theme} key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} website={robots[i].website}/>
	})
	return(
	<div >
		{cardComponent}
    </div>

	);
}

export default CardList;