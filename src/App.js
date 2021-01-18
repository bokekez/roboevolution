import React, { useState, useEffect } from 'react';
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
	else{
				return '';
		}
})

if (state === 'initial')
 	{ 
 		return (
 		<ThemeProvider theme={theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : theme === 'gray' ? grayTheme : theme}>
 		<GlobalStyles /> 
        <div className='tc #0ccac4 top:1rem'>
        	<Toggle className='tc' theme={theme} toggleTheme={toggleTheme} />
	 		<h1 className='f1'>RoboFriends</h1>
			<SearchBox theme={theme} searchChange={onSearchChange}/>
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
			<div className='tc #0ccac4 top:1rem'>	
				<Toggle className='tc' theme={theme} toggleTheme={toggleTheme} />
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox theme={theme} searchChange={onSearchChange}/>
				<p class='p1'>Search found no robots</p>
			</div>
	        <footer>
	        </footer>

	    	</ThemeProvider>
			)
	}else {		
		return(
			
			<ThemeProvider theme={theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : theme === 'gray' ? grayTheme : theme}>
			<GlobalStyles />
			<div className='tc top:1rem'>	
				<Toggle className='tc' theme={theme} toggleTheme={toggleTheme} />
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox theme={theme} searchChange={onSearchChange}/>
					<ErrorBoundry>
						<CardList theme={theme} robots={filterRobotsName}/>
					</ErrorBoundry>
				<CreateCard name={name} email={email} website={website}/>
			</div>
			 <footer>
	        </footer>
	    	</ThemeProvider >
		);
	}
	}
	
}

export default App;