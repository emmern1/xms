import React		from 'react';
import ReactDOM		from 'react-dom';

import theme			from './themes.css';
import Who				from './Who';
import Parallax			from './ParaLax';
import Functionality	from './Functionality';
import NavBar			from './NavBar';



class App extends React.Component {
	render() {
		return (
			<div>
				<NavBar>
					<a href="#f">functionality</a>
					<a href="#w">who's it for</a>
				</NavBar>
				<Parallax src="http://stargayzing.com/wp-content/uploads/2014/10/f1fe7d6e7224702e91786e5cb22be905.jpg">
					<h1>
						<img 
							style={{height  : '100px'}}
							src="assets/img/xmslogo.png" />
						<br/>
						Exhibition Management System
					</h1>
				</Parallax>
				<Who 			id="top" theme1={theme.blue} theme2={theme.grey}/>
				<Functionality 	id="f" theme={theme.grey}/>
				<Blank/>
				<Parallax src="assets/img/cover/1.jpg" small={true} />
				<Blank />
				
				
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