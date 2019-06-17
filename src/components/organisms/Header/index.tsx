import * as React from 'react';
import classNames from 'classnames';
import './_header.scss';

import Hamburger from '../../atoms/Hamburger';

interface IProps {
	children: React.ReactNode;
}

interface IState {
	expanded: boolean;
}

export default class Header extends React.PureComponent<IProps, IState> {
	state: IState = {
		expanded: false,
	};

	toggleExpandedState = () => {
		const prevState = this.state.expanded;
		this.setState({ expanded: !prevState });
	};

	handleHamburgerClick = () => {
		this.toggleExpandedState();
	};

	handleOverlayClick = () => {
		this.toggleExpandedState();
	};

	render() {
		const headerClass = classNames({
			header: true,
			'header--expanded': this.state.expanded,
		});

		const headerMenuClass = classNames({
			header__menu: true,
			'header__menu--expanded': this.state.expanded,
		});

		return (
			<header className={`${headerClass} header--sticky`}>
				<div className="header__inner">
					<div className="header__logo" />
					<div className={headerMenuClass}>
						<Hamburger onClick={this.handleHamburgerClick} />
						{this.props.children}
					</div>
				</div>
				<div className="header__overlay" onClick={this.handleOverlayClick} />
			</header>
		);
	}
}
