import React, { useState, useEffect, useRef } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
// import {robots} from './robots';
import './App.css';
import ErrorBoundry from './ErrorBoundry';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, grayTheme } from './theme';
import { GlobalStyles } from './global';
import Toggle from './toggle.js'
import CreateCard from './CreateCard';
import LastCard from './LastCard.js'
import CurrentRobot from './CurrentRobot.js'
import Register from './Register.js'

// const state ={
// 	robots: robots,
// 	searchfield: ''
// }

function App (){

document.title = "Roboevolution"

//
const [route, setRoute] = useState('home');
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [website, setWebsite] = useState('');
const [id1, setId1] = useState(0);
const [newCard, setNewCard] = useState({id: 0, newName: 'Place', newEmail: 'Holder@gmail.com', newWebsite: 'PH.com'})
const [user, setUser] = useState({username: '', usermail: '', password: ''})
// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');
// const [usermail, setUsermail] = useState('');

// const newCard = {
// 	id: 0,
// 	newName: 'name',
// 	newEmail: 'email',
// 	newWebsite: 'website'
// }


const [theme, setTheme] = useState('light');
const [state, setState] = useState('loaded');
const [robots, setRobots] = useState([]);
const [newRobots, setNewRobots] = useState([]);
const [searchfield, setSearchfield] = useState('');
const [lastCardComponentMap, setlastCardComponentMap] = useState([]);



const toggleTheme = () => {
	console.log(theme);
	if (theme === 'light') {
    setTheme('dark');

  } else if (theme === 'dark') {
    setTheme('gray');

  }
  else {
  	setTheme('light');
  }
}
const routeChangeSearch = () => {
	console.log(route.value);
	if ( route !== 'search')
	{
		setRoute('search');
	}
}
const routeChangeCreate = () => {
	console.log(route.value);
	if ( route !== 'create')
	{
		setRoute('create');
	}
}

const routeChangeHome = () => {
	console.log(route.value);
	if ( route !== 'home'){
		setRoute('home')
	}
}

const routeLogIn = () => {
	if (route !== 'login'){
		setRoute('login')
	}
}

const routeRegister = () => {
	if (route !== 'register'){
		setRoute('register')
	}
}

let colorVar;
let colorVarText;
	switch(theme)
	{
		case 'light':
			// colorVar='bg-light-green';
			colorVar= 'bg-light-green';
			colorVarText= 'dark-green';
			break;
		case 'dark':
			colorVar= 'bg-light-blue';
			colorVarText= 'darkest-blue';
			break;
		case 'gray':
			colorVar= 'bg-light-gray';
			colorVarText= 'gray';
			break;
		default:
			colorVar='gray';
	}

// useEffect(() => { if (setState !== 'loaded') {	
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 		.then(response => response.json())
// 	 	.then(users => {setRobots(users)})
// 	 	.then(setState('loaded'))
// 	}}, []) // <-- didMount da se ne ucitava stalno

// useEffect(() => {function handler (newCard) { setRobots(newCard)}}, [])

useEffect(() => {}, [])

const onSearchChange = (event) => {
		setSearchfield(event.target.value)
	}

const filterRobotsName = robots.filter(robot => {
	if (robot.newName.toLowerCase().includes(searchfield.toLowerCase()))
			{
				return robot.newName;
			}
	else if (robot.newEmail.toLowerCase().includes(searchfield.toLowerCase()))
			{
				return robot.newEmail;
			}	
	else if (robot.newWebsite.toLowerCase().includes(searchfield.toLowerCase()))
			{
				return robot.newWebsite;
			}	
	else{
				return '';
		}
})


// const lastCard = robots[robots.length-1];


if (route === 'home')
{
	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : theme === 'gray' ? grayTheme : theme}>
 		<GlobalStyles /> 
        <div className=' tc'>
			<div style={{display: 'flex', flexDirection: 'row'}}>	
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-start', cursor: 'pointer', top: '1rem', borderRadius: '12px',  }} 
				 onClick={routeChangeSearch} type="submit" value="Search"/>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-start',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				 onClick={routeChangeCreate} type="submit" value="Create"/>
				 <input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-start',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				 onClick={routeChangeHome} type="submit" value="Home"/>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-end',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				onClick={routeLogIn} type="submit" value="LogIn"/>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-end',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				onClick={routeRegister} type="submit" value="Register"/>
			</div>
        	<Toggle className='tc' theme={theme} toggleTheme={toggleTheme} />
	 		<h1 className='f1'>RoboFriends</h1>
			<input className={` dim ${colorVar} ${colorVarText}`} style={{fontSize: "2rem", justifyContent: 'center', cursor: 'pointer', borderRadius: '12px'}} onClick={routeChangeSearch} type="submit" value="Search robots"/>
			<input className={` dim ${colorVar} ${colorVarText}`} style={{fontSize: "2rem", justifyContent: 'center', cursor: 'pointer', borderRadius: '12px'}} onClick={routeChangeCreate} type="submit" value="Create robots"/>
		</div>
        <footer>
        </footer>
    	</ThemeProvider>
	)
}
if (route === 'create')
	{
		return (	
			<ThemeProvider theme={theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : theme === 'gray' ? grayTheme : theme}>
			<GlobalStyles />
			<div className='tc'>	
				<div style={{display: 'flex', flexDirection: 'row'}}>	
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-start', cursor: 'pointer', top: '1rem', borderRadius: '12px',  }} 
				 onClick={routeChangeSearch} type="submit" value="Search"/>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-start',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				 onClick={routeChangeCreate} type="submit" value="Create"/>
				 <input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-start',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				 onClick={routeChangeHome} type="submit" value="Home"/>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-end',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				onClick={routeLogIn} type="submit" value="LogIn"/>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-end',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				onClick={routeRegister} type="submit" value="Register"/>
				
				{/* <Toggle className=' tc' style={{alignSelf: 'center', position: 'absolute'}} theme={theme} toggleTheme={toggleTheme} /> */}
				</div>
				<Toggle className=' tc' style={{alignSelf: 'center', position: 'absolute'}} theme={theme} toggleTheme={toggleTheme} />
				<h1 className='f1'>RoboFriends</h1>
				<CreateCard setNewCard={setNewCard} newRobots={newRobots} setNewRobots={setNewRobots} robots={robots} setRobots={setRobots} id1={id1} setId1={setId1} newCard={newCard} colorVar={colorVar} name={name} setName={setName} setEmail={setEmail} setWebsite={setWebsite} email={email} website={website}/>
				<CurrentRobot theme={theme} robots={robots} /> 
				<LastCard theme={theme} newCard={newCard} robots={robots} setlastCardComponentMap={setlastCardComponentMap} lastCardComponent={lastCardComponentMap}/> 
				
			</div>
			 <footer>
	        </footer>
	    	</ThemeProvider >
			
		)
	}
if ( route === 'register'){
	return (
			<ThemeProvider theme={theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : theme === 'gray' ? grayTheme : theme}>
			<GlobalStyles />
			<div className='tc'>	
				<div style={{display: 'flex', flexDirection: 'row'}}>	
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-start', cursor: 'pointer', top: '1rem', borderRadius: '12px',  }} 
				 onClick={routeChangeSearch} type="submit" value="Search"/>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-start',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				 onClick={routeChangeCreate} type="submit" value="Create"/>
				 <input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-start',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				 onClick={routeChangeHome} type="submit" value="Home"/>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-end',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				onClick={routeLogIn} type="submit" value="LogIn"/>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-end',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				onClick={routeRegister} type="submit" value="Register"/>
				
				{/* <Toggle className=' tc' style={{alignSelf: 'center', position: 'absolute'}} theme={theme} toggleTheme={toggleTheme} /> */}
				</div>
				<Toggle className=' tc' style={{alignSelf: 'center', position: 'absolute'}} theme={theme} toggleTheme={toggleTheme} />
				<h1 className='f1'>RoboFriends</h1>
				<Register user={user} setUser={setUser}/>
				
			</div>
			 <footer>
	        </footer>
	    	</ThemeProvider >
	)
}
if ( route === 'search')
{
if (state === 'initial')
 	{ 
 		return (
 		<ThemeProvider theme={theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : theme === 'gray' ? grayTheme : theme}>
 		<GlobalStyles /> 
        <div className='tc'>
				<div style={{display: 'flex', flexDirection: 'row'}}>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-start', cursor: 'pointer', top: '1rem', borderRadius: '12px',  }} 
				 onClick={routeChangeSearch} type="submit" value="Search"/>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-start',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				 onClick={routeChangeCreate} type="submit" value="Create"/>
				 <input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-start',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				 onClick={routeChangeHome} type="submit" value="Home"/>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-end',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				onClick={routeLogIn} type="submit" value="LogIn"/>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-end',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				onClick={routeRegister} type="submit" value="Register"/>
				</div>
				<Toggle className=' tc' style={{alignSelf: 'center', position: 'absolute'}} theme={theme} toggleTheme={toggleTheme} />
	 		<h1 className='f1'>RoboFriends</h1>
			{/* <SearchBox theme={theme} searchChange={onSearchChange}/> */}
			<h1 className='tc'>Loading</h1> 
			
		</div>
        <footer>
        </footer>
    	</ThemeProvider>
		)
 	}
else if (state === 'loaded') {
	if (filterRobotsName == '')
	{
		return(
			<ThemeProvider theme={theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : theme === 'gray' ? grayTheme : theme}>
			<GlobalStyles />
			<div className='tc'>	
				<div style={{display: 'flex', flexDirection: 'row'}}>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-start', cursor: 'pointer', top: '1rem', borderRadius: '12px',  }} 
				 onClick={routeChangeSearch} type="submit" value="Search"/>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-start',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				 onClick={routeChangeCreate} type="submit" value="Create"/>
				 <input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-start',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				 onClick={routeChangeHome} type="submit" value="Home"/>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-end',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				onClick={routeLogIn} type="submit" value="LogIn"/>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-end',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				onClick={routeRegister} type="submit" value="Register"/>
				</div>
				<Toggle className=' tc' style={{alignSelf: 'center', position: 'absolute'}} theme={theme} toggleTheme={toggleTheme} />
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox newCard={newCard} theme={theme} searchChange={onSearchChange}/>
				<p class='p1'>Search found no robots</p>
			</div>
	        <footer>
	        </footer>
	    	</ThemeProvider>
			)
 }else  
{		
		return(		
			<ThemeProvider theme={theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : theme === 'gray' ? grayTheme : theme}>
			<GlobalStyles />
			<div className='tc'>	
				<div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-start', cursor: 'pointer', top: '1rem', borderRadius: '12px',  }} 
				 onClick={routeChangeSearch} type="submit" value="Search"/>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-start',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				 onClick={routeChangeCreate} type="submit" value="Create"/>
				 <input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-start',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				 onClick={routeChangeHome} type="submit" value="Home"/>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-end',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				onClick={routeLogIn} type="submit" value="LogIn"/>
				<input className={` dim ${colorVar} ${colorVarText}`} style={{outline: 'none', display: 'inline-block', textAlign: 'center', width: '7rem', alignSelf: 'flex-end',  cursor: 'pointer', top: '1rem', borderRadius: '12px', background: `${colorVar}`}} 
				onClick={routeRegister} type="submit" value="Register"/>
				</div>
				<Toggle className=' tc' style={{alignSelf: 'center', position: 'absolute'}} theme={theme} toggleTheme={toggleTheme} />
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox newCard={newCard} theme={theme} searchChange={onSearchChange} />
					<ErrorBoundry>
						<CardList theme={theme} newCard={newCard} robots={[...filterRobotsName]} setRobots={setRobots} newRobots={newRobots} setNewRobots={setNewRobots}/> 
					</ErrorBoundry>
			</div>
			 <footer>
	        </footer>
	    	</ThemeProvider >
		);
	}
	}

}
}
export default App;