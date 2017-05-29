import React	from 'react';

import css		from './style.css';
import size		from '../responsive.css';

class Section extends React.Component {
	render() {
		var width = window.innerWidth;
		var after = width > 736 && this.props.flip; // decides if the title will be displayed before (on mobile devices) or the right (on desktop)
		var title = (<div className={css.title}>{this.props.title}</div>);
		return (
			<div className={css.section + ' ' + this.props.theme}>
				<div className={size.content}>
					{!after ? title : null}
					<div className={css.text}>
						{this.props.children}
					</div>
					{after ? title : null}
				</div>
			</div>);
	}
}

class Who extends React.Component {
	render() {
		return (
			<div id={this.props.id} className={css.who}>
				<Section title="Why exhibition designers love XMS" theme={this.props.theme1}>
					Through the provision of the XMS enhanced functionality XMS makes complex exhibits easy to develop and operate. XMS allows exhibition content developers to structure content files (images, video, audio), subtitles, and other types of content.
				</Section>
				<Section title="Why venue managers love XMS"       theme={this.props.theme2} flip={true}>
					XMS has a survey module especially designed to allow our clients gain valuable insight into audience engagement. Such surveys can be presented using a corresponding application, Responses from the survey will be analyzed and presented in the form of graphs. Offering valuable visual data to organisations about their audiences.
				</Section>
			</div>);
	}
}





export default Who;