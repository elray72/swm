import * as React from 'react';
import { Helmet } from 'react-helmet';
import 'react-id-swiper/src/styles/scss/swiper.scss';
import './_home.scss';

import Hero from '../../organisms/Hero'

export default class Home extends React.PureComponent {

	render() {
		return (
			<div className="home">
				<Helmet>
					<title>Home</title>
					<meta name="description" content="Home" />
				</Helmet>
				<Hero title="Hero" intro="It's where the heart is." />
			</div>
		);
	}
}

