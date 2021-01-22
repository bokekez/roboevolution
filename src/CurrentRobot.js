import React from 'react';
import Card from './Card';

const CurrentRobot = (robots, newName) => {
    const [currentName, setCurrentName] = React.useState()
    console.log(robots.newName);
    React.useEffect(() => {
        //grabbing robot data
        const index = robots.length - 1
        const robotData = robots[index]
        if (robotData != null){
            setCurrentName(<CurrentRobot className='f5'>Robot {robotData.newName} has been created!</CurrentRobot>)
        }}, [robots])
    return (
        <div>
            <f1>{currentName}</f1>
             
              
        </div>
    )
    // if (robots.length != 0) {
    //     return(
    //         <Header className='f5'>Robot {CurrentRobot(display)}has been created!</Header>
    //     )
    
}

export default CurrentRobot;