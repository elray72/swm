import * as React from 'react';
import classNames from 'classnames';
import './_tile.scss';

interface IProps {
	className?: string,
	element?: string,
	href?: string,
	image: string,
	logo?: string,
	target?: string,
	title: string,
}

export const Tile: React.FC<IProps> = (props) => {
	const componentClass: string = classNames(props.className, 'tile');

	return (
		<div className={componentClass}>
			<div className="tile__img-container">
				<img className="tile__img" src="/static/img/tile.jpg" alt={props.title} />
			</div>
			<div className="tile__title-container">
				<div className="tile__logo--container">
					<img className="tile__logo" src={props.logo} alt="7 logo" />
				</div>
				<h2 className="tile__title">{props.title}</h2>
			</div>
		</div>
	);
};

Tile.defaultProps = {
	logo: '/static/img/logo.png'
};

export default Tile;
