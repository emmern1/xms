import React		from 'react';
import ReactDOM		from 'react-dom';

import theme				from './themes.css';
import size					from './responsive.css';

import Parallax				from './ParaLax';
import Video				from './Video';
import Features				from './Features';
import Functionality		from './Functionality';
import Who					from './Who';

import NavBar, {ScrollLink}	from './NavBar';
//import Test from './Test';


//var aretha = "http://stargayzing.com/wp-content/uploads/2014/10/f1fe7d6e7224702e91786e5cb22be905.jpg";

class App extends React.Component {
	render() {
		return (
			<div>
				<NavBar>
					<ScrollLink href="features">features</ScrollLink>
					<ScrollLink href="functionality">functionality</ScrollLink>
					<ScrollLink href="who">who's it for</ScrollLink>
					<ScrollLink href="contact">contact</ScrollLink>
				</NavBar>
				<Parallax 		id="top"	src="assets/img/cover/4.jpg" >
					<h1>
						<img 
							style={{height  : '100px'}}
							src="assets/img/xmslogo_b.png" />
						<br/>
						<span className={size.title + ' ' + size.main}>Exhibition Management System</span>
					</h1>
				</Parallax>
				<Video 								theme={theme.blue}/>
				<Features 		id="features"		theme={theme.grey}/>
				<Parallax src="assets/img/cover/3_copy_s.jpg" small={true} />
				<Functionality 	id="functionality"  theme={theme.grey}/>
				<Who 			id="who" 			theme1={theme.blue} theme2={theme.grey}/>
				
				<Contact />
				
				
			</div>);
	}
}


class Contact extends React.Component {
	render() {
		return (
			<div id="contact" className={theme.contact}>
				<h1>To find out more about what XMS can do for you contact <a href='mailto:claire@getxms.com'>claire@getxms.com</a>
				</h1>

			</div>);
	}
}




ReactDOM.render(
	<App />,
	document.getElementById('root'))