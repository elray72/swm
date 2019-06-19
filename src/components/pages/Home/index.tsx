import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import * as tileImage from '../../../static/img/tile.jpg';
import * as sevenLogo from '../../../static/img/logo.png';

import Tile from '../../molecules/Tile';
import TileList from '../../organisms/TileList';

const Section = styled.section`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export default class Home extends React.PureComponent {
	render() {
		return (
			<Section className="section">
				<Helmet>
					<title>Home</title>
					<meta name="description" content="Home" />
				</Helmet>
				<TileList>
					<Tile image={tileImage}
								title="Home and away"
								logo={sevenLogo}
								logoAlt="7 logo" />
					<Tile href="https://homeandaway.7plus.com.au/"
								target="_blank"
								image={tileImage}
								title="Link variation, no logo" />
					<Tile type="responsive"
								href="https://homeandaway.7plus.com.au/"
								target="_blank"
								image={tileImage}
								logo={sevenLogo}
								logoAlt="7 logo"
								title="Responsive link" />
				</TileList>
			</Section>
		);
	}
}
