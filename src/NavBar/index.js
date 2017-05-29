import React				from 'react';
//import {ScrollLink as Link} from '../components/NavBar';

import css		from './style.css';
import icon		from './menuicon.css';






class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {expanded: false};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({expanded: this.state.expanded == false});
	}

	render() {
		var classList = [
							css.navBar,
							this.state.expanded ? css.expanded : null
						];
		return (
			<div className={classList.join(' ')}>
				
				<span className={css.left}>
					<div className={css.logo}>
						<ScrollLink href="top" duration={500}>
							<img src="assets/img/xmslogo.png" />
						</ScrollLink>
					</div>
				</span>
				<span className={css.right}>
					<MenuIcon onClick={this.toggle} clicked={this.state.expanded} className={css.menuIcon}/>
					<div className={css.linksD}>
						<div>
							{this.props.children}
						</div>
					</div>
				</span>
				<div className={css.linksM}>
					<div onClick={this.toggle}>
						{this.props.children}
					</div>
				</div>
			</div>
			);
	}
}



class MenuIcon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {clicked: false};
		this.toggleIcon = this.toggleIcon.bind(this);
	}

	toggleIcon() {
		this.setState({clicked: this.state.clicked == false});
		if (this.props.onClick)
			this.props.onClick();
	}

	render() {
		return (
			<div className={icon.menuIcon + ' ' + this.props.className} onClick={this.props.onClick}>
				<div className={this.props.clicked ? icon.top : icon.top2}></div>
				<div className={this.props.clicked ? icon.mid : icon.mid2}></div>
				<div className={this.props.clicked ? icon.bot : icon.bot2}></div>
			</div>
			);
	}
}


class ScrollLink extends React.Component {
	constructor(props) {
		super(props);
		this.scroll   = this.scroll.bind(this);
		this.scrollTo = this.scrollTo.bind(this);
		this.duration = props.duration;
		
	}

	scrollTo(to, duration) {
	    if (duration <= 0) return;
	    var bt = document.body.scrollTop;
	    var difference = to - bt;
	    var perTick = difference / duration * 10;

	    setTimeout(function() {
	    	//console.log(bt, to)
	        document.body.scrollTop = bt + perTick;
	        if (bt === to) return;
	        this.scrollTo(to, duration - 10);
	    }.bind(this), 10);
	}

	scroll() {
		let href = this.props.href;
		let to = document.getElementById(href).offsetTop;
		this.scrollTo(to, this.duration);
	}

	render() {
		let href = this.props.href;
		if (this.props.animated == false)
			return (<a href={'#'+href}>{this.props.children}</a>);

		
		return (
			<a onClick={this.scroll}>{this.props.children}</a>
		);
	}
}





export default NavBar;