import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import * as tile from '../../../static/img/tile.jpg';

import Tile from '../../molecules/Tile';

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
				<Tile element="div"
							image={tile}
							title="Home and away" />
				<Tile element="div"
							image={tile}
							title="Home and away" />
				<Tile element="div"
							image={tile}
							title="Home and away" />
			</Section>
		);
	}
}
