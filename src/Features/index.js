import React	from 'react';

import css		from './style.css';
import info		from './infochunk.css';
import size		from '../responsive.css';

class Features extends React.Component {
	render() {
		return (
			<div id={this.props.id} className={this.props.theme + ' ' + css.section}>
					
					<h1 className={size.title}>Features</h1>
					<div className={css.content}>
							<div>
								<Info 
									title="build/edit content" 
									icon="fa-pencil">
									XMS makes complex exhibits easy to develop and operate.
	XMS allows exhibition content developers to structure content files (images, video, audio), subtitles, and other types of content.

								</Info>	
							</div>
					
							<div>
								<Info 
									title="know your visitor" 
									icon="fa-area-chart">
									 XMS has a survey module especially designed to allow our clients gain valuable insight into audience engagement. Such surveys can be

								</Info>
								<Info 
									title="hardware control" 
									icon="fa-cogs">
									 Through the interconnectivity of the system XMS creates reports on client status and information thus making it easy to keep track of what hardware is used within an exhibition. XMS has the function of recording timing for automatic startups and termination.

								</Info>
							</div>
					</div>
				</div>
			);
	}
}




class Info extends React.Component {
	render() {
		var classList = ["fa", this.props.icon, info.icon]
		return (
			<div className={info.infoChunk}>
				<i className={classList.join(' ')}></i>
				<div className={info.title}>
					{this.props.title}
				</div>
				<div className={info.description}>
					{this.props.children}
				</div>
			</div>
			);
	}
}

{/*
								<Info 
									title="client software for windows, OSX, linux" 
									icon="fa-linux">
									A stand-alone client application is available for download and installation on any Windows, Mac or Linux client computer.

								</Info>

*/}

export default Features;