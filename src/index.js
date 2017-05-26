import React 		from 'react';
import ReactDOM 	from 'react-dom';

import theme 		from './themes.css';
import Who          from './Who';




class App extends React.Component {
	render() {
		return (
			<div>
				<Who theme1={theme.blue} theme2={theme.grey}/>
				<Blank/>
			</div>);
	}
}


class Blank extends React.Component {
	render() {
		return <div style={{height: '100vh'}}></div>;
	}
}




ReactDOM.render(
	<App/>,
	document.getElementById('root'))