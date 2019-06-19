import * as React from 'react';
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import * as defaultLogo from '../../../static/img/logo.png';
import { ColourOption } from '../../../common/variables';
import './_tile.scss';

import Heading from '../../atoms/Heading';
import Logo from '../../atoms/Logo';
import TileImage from '../../atoms/BackgroundImage';

type TileType = 'large' | 'small';

interface IProps {
	className?: string,
	href?: string,
	image: string,
	logo?: string,
	logoAlt?: string,
	target?: string,
	title: string,
	type?: TileType,
	colour?: ColourOption | any,
}

const TileHeading = styled(Heading)`
	font-size: 20px;
	margin: 0;
	flex-shrink: 1;
	color: ${p => p.colour};
`;

const TileLogo = styled(Logo)`
	height: 40px;
	width: 40px;
	margin-right: 5px;
	flex-shrink: 0;
`;

const A = styled.a`
	text-decoration: none;
	display: block;
	&:hover img {
		transform: scale(1.1);
	}
	
	img {
		transition: transform 0.5s ease-in-out;
	}
	
	.tile {
		overflow: hidden;
	}
`;

const BaseTile = (props: IProps) => {
	const componentClass: string = classNames(props.className, 'tile');
	const tileLogo = props.logo && props.logoAlt
		? <TileLogo className="tile__logo" src={props.logo} alt="7 logo" />
		: null;

	return (
		<div className={componentClass}>
			<TileImage className="tile__bg" src={props.image} alt={props.title} />
			<div className="tile__title-container">
				{tileLogo}
				<TileHeading className="tile__title" type="H2" colour={props.colour}>
					{props.title}
				</TileHeading>
			</div>
		</div>
	);
};

export const Tile: React.FC<IProps> = (props) => {
	const linkProps = !props.target ? [] : { target: props.target };

	if (props.href) {
		return (
			<A href={props.href} {...linkProps}>
				<BaseTile {...props} />
			</A>
		)
	}

	return <BaseTile {...props} />;
};

Tile.defaultProps = {
	logo: defaultLogo,
	colour: 'white',
};

export default Tile;
