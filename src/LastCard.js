import React from 'react';
import Card from './Card';

const LastCard = ({props, robots, theme}) => {
    const [componentToRender, setComponentToRender] = React.useState()
    
    React.useEffect(() => {
    //grabbing robot data
    const index = robots.length - 1
    const robotData = robots[index]
    // console.log(robotData)
    console.log(JSON.stringify(robots))
    // // debugger;
     setComponentToRender(<Card robotData={robotData} theme={theme} id={robotData[0].id} name={robotData[0].newName} email={robotData[0].newEmail} website={robotData[0].newWebsite}/>)
    }, [robots, theme])
    return (
    
    <div>
        {componentToRender}
    </div>
    )

}
    
export default LastCard;

// const lastCard = ({ robots, theme, newCard, setRobots,newRobots, setNewRobots, id, newName, newEmail, newWebsite,setlastCardComponentMap, lastCardComponentMap }) =>{
    
//     //setlastCardComponentMap(...robots => robots.lenght-1);
    
//     setlastCardComponentMap(robots =>[robots, robots.length- 1]);
//     // const lastCardComponentMap = map => robots.from(map)[map.size-1];
//     console.log(setlastCardComponentMap, 'ovdje');
//     const lastCardComponent = lastCardComponentMap.map((f, i) => {
//         return <Card theme={theme} key={i} id={lastCardComponentMap[i].id} newName={lastCardComponentMap[i].newName} newEmail={lastCardComponentMap[i].newEmail} newWebsite={lastCardComponentMap[i].newWebsite}/> 
//     }   )
    

// 	return(
// 	<div >
// 		{lastCardComponent}
//     </div>

// 	);

// }

// export default lastCard;