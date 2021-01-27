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
        newEmail={robotData.newEmail}
        newWebsite={robotData.newWebsite} />
        )
    }
    }, [robots, theme])
        return (
        <div>
            {componentToRender}
            
        </div>
        )
    
}
    
export default LastCard;
