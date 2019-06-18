import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import 'sanitize.css';
import '../themes/v1/scss/style.scss';

// Components
import Home from './pages/Home/index';

const App: React.FC = () => {
	return (
		<React.Fragment>
			<Helmet titleTemplate="SWM | %s" defaultTitle="SWM">
				<meta name="description" content="" />
			</Helmet>
			<main className="main">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/swm" component={Home} />
				</Switch>
			</main>
		</React.Fragment>
	);
};

export default App;
