import React from 'react';
import css from './style.css';


class Video extends React.Component {
	render() {
		return (
			<div className={css.section + ' ' + this.props.theme}>
				<video controls>
					<source src='assets/XMS_V004.mp4' type='video/mp4'/>
					your browser...
				</video>
			</div>
			);
	}
};




export default Video;