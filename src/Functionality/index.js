import React	from 'react';
import css		from './style.css';
import size		from '../responsive.css';


class Functionality extends React.Component {
	render() {
		return (
				<div className={this.props.theme + ' ' + css.section} id={this.props.id}>
					
					<h1 className={size.title}>Functionality</h1>
		
					<div className={size.content}>
						<div className={css.textbox}>
							<div className={css.subtitle}></div>
							XMS allows exhibition content developers to structure content files (images, video, audio), subtitles, and other types of content. A stand-alone client application is available for download and installation on any Windows, Mac or Linux client computer. The client software synchronizes changes in content from server to client. This way the latest content is always available locally for the client. XMS will in future also be able to offer client software for devices and tablets.
						</div>
						

						<div className={css.textbox}>
							<div className={css.subtitle}>Surveys</div>
							XMS has a survey module especially designed to allow our clients gain valuable insight into audience engagement. Such surveys can be presented using a corresponding application, or as examination of the browser. Responses from the survey will be analyzed and presented in the form of graphs. Offering valuable visual data to organisations about their audiences. The statistics can be downloaded for further data analysis.
						</div>

						<div className={css.textbox}>
							<div className={css.subtitle}>Hardware control</div>
							Through the interconnectivity of the system XMS creates reports on client status and information thus making it easy to keep track of what hardware is used within an exhibition. XMS has the function of recording timing for automatic startups and termination. A future version of XMS will also be able to verify the client’s audio, and control power (light), projectors and other hardware.
						</div>
					</div>
				</div>
			);
	}
}





export default Functionality;