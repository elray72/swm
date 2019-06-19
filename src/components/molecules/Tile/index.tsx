import * as React from 'react';
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import { em } from '../../../common/helpers';
import * as defaultLogo from '../../../static/img/logo.png';
import { ColourOption } from '../../../common/variables';

import Heading from '../../atoms/Heading';
import Logo from '../../atoms/Logo';
import Div from '../../atoms/Div';
import TileImage from '../../atoms/BackgroundImage';

type TileType = 'responsive' | any;

interface IProps {
	className?: string,
	colour?: ColourOption | any,
	description?: string,
	href?: string,
	image: string,
	logo?: string,
	logoAlt?: string,
	target?: string,
	title: string,
	type?: TileType,
}

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

const TileDiv = styled(Div)`
	width: 100%;
	max-width: ${em(315)};
	height: ${em(177)};
	background: black;
	margin: 0 auto ${em(16)};
	display: flex;
	position: relative;
	transition: 0.25s ease-in-out;
	${p => {
		if (p.type === 'responsive') {
			return `
				@media (max-width: 768px) {
					height:  ${em(90)};
					flex-direction: row;
					.tile {
						&__bg {
							width: ${em(90)};
							position: static;
							flex-shrink: 0;
							img {
								width: auto;
							}
						}
						&__logo {
							display: none;
						}
						&__title {
							color: #000;
							&-container {
								height: 100%;
								background: #eee;
								padding: ${em(15)};
								font-size: ${em(14, 16)};
								align-items: center;
							}
						}
					}
				}
			`;
		}
	}}
`;

const TileTitleContainer = styled(Div)`
	position: relative;
	z-index: 1;
	width: 100%;
	background: rgba(0, 0, 0, 0.5);
	align-self: flex-end;
	min-height: ${em(55)};
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: ${em(5)} ${em(10)};
	transition: 0.25s ease-in-out;
`;

const TileTitle = styled(Heading)`
	font-size: ${em(20)};
	margin: 0;
	flex-shrink: 1;
	color: ${p => p.colour};
	transition: color 0.25s ease-in-out;
`;

const TileLogo = styled(Logo)`
	height: ${em(40)};
	width: ${em(40)};
	margin-right: ${em(5)};
	flex-shrink: 0;
`;

/** Base tile component, allows the tile . */
export const Tile = (props: IProps) => {
	const componentClass: string = classNames(props.className, 'tile');
	const tileLogo = props.logo && props.logoAlt
		? <TileLogo className="tile__logo" src={props.logo} alt={props.logoAlt} />
		: null;

	return (
		<TileDiv className={componentClass} type={props.type}>
			<TileImage className="tile__bg" src={props.image} alt={props.title} />
			<TileTitleContainer className="tile__title-container">
				{tileLogo}
				<TileTitle className="tile__title" type="h2" colour={props.colour}>
					{props.title}
				</TileTitle>
			</TileTitleContainer>
		</TileDiv>
	);
};

export const ATile: React.FC<IProps> = (props) => {
	const linkProps = !props.target ? [] : { target: props.target };

	if (props.href) {
		return (
			<A href={props.href} {...linkProps}>
				<Tile {...props} />
			</A>
		)
	}

	return <Tile {...props} />;
};

ATile.defaultProps = {
	logo: defaultLogo,
	colour: 'white',
};

export default ATile;
