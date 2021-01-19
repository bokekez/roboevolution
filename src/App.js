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
const generateCard = {
	id: '',
	name: '',
	email: '',
	website: ''
}


const [theme, setTheme] = useState('light');
const [state, setState] = useState('initial')
const [robots, setRobots] = useState([]);
const [searchfield, setSearchfield] = useState('');

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

let colorVar;
	switch(theme)
	{
		case 'light':
			// colorVar='bg-light-green';
			colorVar= 'bg-light-green';
			break;
		case 'dark':
			colorVar= 'bg-light-blue';
			break;
		case 'gray':
			colorVar= 'bg-light-gray';
			break;
		default:
			colorVar='gray';
	}

useEffect(() => { if (setState !== 'loaded') {	
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
	 	.then(users => {setRobots(users)})
	 	.then(setState('loaded'))
	}}, []) // <-- didMount da se ne ucitava stalno

const onSearchChange = (event) => {
		setSearchfield(event.target.value)
	}

const filterRobotsName = robots.filter(robot => {
	if (robot.name.toLowerCase().includes(searchfield.toLowerCase()))
			{
				return robot.name;
			}

	else if (robot.email.toLowerCase().includes(searchfield.toLowerCase()))
			{
				return robot.email;
			}	
	else if (robot.website.toLowerCase().includes(searchfield.toLowerCase()))
			{
				return robot.website;
			}	
	// else{
	// 			return '';
	// 	}
})
if (route === 'home')
{
	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : theme === 'gray' ? grayTheme : theme}>
 		<GlobalStyles /> 
        <div className=' tc'>
        	<Toggle className='tc' theme={theme} toggleTheme={toggleTheme} />
			
	 		<h1 className='f1'>RoboFriends</h1>
			{/* <input onClick={() => route !=='search' ? routeChange : setRoute === 'search' && console.log('was clicked')} type="submit" value="Search robots"/>
			<input onClick={() => route !=='create' ? routeChange : setRoute === 'create'}  type="submit" value="Create robots"/> */}
			<input className={`${colorVar}`} style={{ justifyContent: 'center', cursor: 'pointer', borderRadius: '12px'}} onClick={routeChangeSearch} type="submit" value="Search robots"/>
			<input className={`${colorVar}`} style={{ justifyContent: 'center', cursor: 'pointer', borderRadius: '12px'}} onClick={routeChangeCreate} type="submit" value="Create robots"/>
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
				<Toggle className='tc' theme={theme} toggleTheme={toggleTheme} />
				{/* <input className={` br3 flex flex-inline flex-column b--white ${colorVar}`} onClick={routeChangeSearch} type="submit" value="Search robots"/>
				<input className={` br3 flex flex-inline flex-column b--white ${colorVar}`} onClick={routeChangeHome} type="submit" value="Home"/> */}
				<input className={`${colorVar}`} style={{display: 'flex', justifyContent: 'flex-left', cursor: 'pointer', borderRadius: '12px', background: `${colorVar}`}}
				onClick={routeChangeSearch} type="submit" value="Search robots"/>
				<input className={`${colorVar}`} style={{display: 'flex', justifyContent: 'flex-left', cursor: 'pointer', borderRadius: '12px', background: `${colorVar}`}} 
				onClick={routeChangeHome} type="submit" value="Home"/>
				<h1 className='f1'>RoboFriends</h1>
				<CreateCard name={name} email={email} website={website}/>
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
        	<Toggle className='tc' theme={theme} toggleTheme={toggleTheme} />
			<input className={`${colorVar}`} style={{display: 'flex', justifyContent: 'flex-left', cursor: 'pointer', borderRadius: '12px', background: `${colorVar}`}}
			 onClick={routeChangeCreate} type="submit" value="Create robots"/>
			<input className={`${colorVar}`} style={{display: 'flex', justifyContent: 'flex-left', cursor: 'pointer', borderRadius: '12px', background: `${colorVar}`}} 
			 onClick={routeChangeHome} type="submit" value="Home"/>
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
				<Toggle className='tc' theme={theme} toggleTheme={toggleTheme} />
				<input className={`${colorVar}`} style={{display: 'flex', justifyContent: 'flex-left', cursor: 'pointer', borderRadius: '12px', background: `${colorVar}`}} 
				onClick={routeChangeCreate} type="submit" value="Create robots"/>
				<input className={`${colorVar}`} style={{display: 'flex', justifyContent: 'flex-left', cursor: 'pointer', borderRadius: '12px', background: `${colorVar}`}} 
				 onClick={routeChangeHome} type="submit" value="Home"/>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox theme={theme} searchChange={onSearchChange}/>
				<p class='p1'>Search found no robots</p>
			</div>
	        <footer>
	        </footer>

	    	</ThemeProvider>
			)
}else  {		
		return(		
			<ThemeProvider theme={theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : theme === 'gray' ? grayTheme : theme}>
			<GlobalStyles />
			<div className='tc'>	
				<Toggle className='tc' theme={theme} toggleTheme={toggleTheme} />
				<div className=''>
				<input className={`${colorVar}`} style={{display: 'flex', justifyContent: 'flex-left', cursor: 'pointer', borderRadius: '12px', background: `${colorVar}`}} 
				 onClick={routeChangeCreate} type="submit" value="Create robots"/>
				<input className={`${colorVar}`} style={{display: 'flex', justifyContent: 'flex-left', cursor: 'pointer', borderRadius: '12px', background: `${colorVar}`}} 
				 onClick={routeChangeHome} type="submit" value="Home"/>
				</div>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox theme={theme} searchChange={onSearchChange} />
					<ErrorBoundry>
						<CardList theme={theme} robots={filterRobotsName}/>
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