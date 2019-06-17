import * as React from 'react';
import { Helmet } from 'react-helmet';
import './_test.scss';

import Hero from '../../organisms/Hero'

export default class Test extends React.PureComponent {

	render() {
		return (
			<section className="test">
				<Helmet>
					<title>Test</title>
					<meta name="description" content="Test" />
				</Helmet>
				<Hero title="Test" intro="Hello there!" />
			</section>
		);
	}
}
