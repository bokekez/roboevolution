import React from 'react';
import Card from './Card';

const LastCard = ({props, robots, theme, newName}) => {
    const [componentToRender, setComponentToRender] = React.useState()
    
    React.useEffect(() => {
    //grabbing robot data
    const index = robots.length - 1
    const robotData = robots[index]
    // console.log(robotData)
   
    // // debugger;
    if (robotData != null){
    setComponentToRender(<Card robotData={robotData} theme={theme}
        id={robotData.id}
        newName={robotData.newName}
        newEmail={robotData.newName}
        newWebsite={robotData.newName} />
        )
    }
     //  setComponentToRender(<Card robotData={robotData} theme={theme}
    //     id={robotData ? robotData.id : ''}
    //     newName={robotData ? robotData.newName : "" }
    //     newEmail={robotData ? robotData.newName : ""}
    //     newWebsite={robotData ? robotData.newName : ""} />)
    //     }
    // }, [robots, theme])
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