import React from 'react';
import css from './style.css';


class Video extends React.Component {
	render() {
		return (
			<div className={css.section + ' ' + this.props.theme}>
				{/*<video controls>
					<source src='assets/XMS_V004.mp4' type='video/mp4'/>
					your browser...
				</video>*/}
				<iframe src="https://player.vimeo.com/video/220469652" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
			</div>
			);
	}
};




export default Video;