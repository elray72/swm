import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

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
							image="/static/img/tile.jpg"
							title="Home and away" />
				<Tile element="div"
							image="/static/img/tile.jpg"
							title="Home and away" />
				<Tile element="div"
							image="/static/img/tile.jpg"
							title="Home and away" />
			</Section>
		);
	}
}
