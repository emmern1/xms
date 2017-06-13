import React from 'react';
import css from './style.css';


class Video extends React.Component {
	render() {
		return (
			<div className={css.section + ' ' + this.props.theme}>
				<iframe src="https://player.vimeo.com/video/221409095" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
			</div>
			);
	}
};




export default Video;