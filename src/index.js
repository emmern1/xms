import React		from 'react';
import ReactDOM		from 'react-dom';

import theme			from './themes.css';
import Who				from './Who';
import Parallax			from './ParaLax';
import Functionality	from './Functionality';



class App extends React.Component {
	render() {
		return (
			<div>
				<Parallax src="http://stargayzing.com/wp-content/uploads/2014/10/f1fe7d6e7224702e91786e5cb22be905.jpg">
					<h1>Exhibition Management System<br/>
						<div style={{
							display: 'inline-block',
							height : '20px',
							width  : '20px',
							backgroundColor: 'black'
						}}></div>
					</h1>
				</Parallax>
				<Who theme1={theme.blue} theme2={theme.grey}/>
				<Functionality theme={theme.grey}/>
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