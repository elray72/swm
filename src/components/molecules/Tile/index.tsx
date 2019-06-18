import * as React from 'react';
import classNames from 'classnames';
import * as defaultLogo from '../../../static/img/logo.png';
import './_tile.scss';

import Image from '../../atoms/Image';
import Logo from '../../atoms/Logo';

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
				<Image className="tile__img" src={props.image} alt={props.title} />
			</div>
			<div className="tile__title-container">
				<div className="tile__logo--container">
					<Logo className="tile__logo" src={props.logo} alt="7 logo" />
				</div>
				<h2 className="tile__title">{props.title}</h2>
			</div>
		</div>
	);
};

Tile.defaultProps = {
	logo: defaultLogo
};

export default Tile;
