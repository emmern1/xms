import React 		from 'react';
import css 			from './style.css';
import { Parallax } from 'react-parallax';


class P extends React.Component{
	render() {
		var classList = [css.parallax, this.props.small ? css.small : null]
		return (
			<div id={this.props.id} className={css.container}>
				<div className={css.black}></div>
				<Parallax 
					strength={200}
					className={classList.join(' ')}
					bgImage={this.props.src}
					>
		          

		          <div className={css.box}>
		          	{this.props.children}
		          </div>
		        </Parallax>
			</div>
			);
	}
};



export default P;