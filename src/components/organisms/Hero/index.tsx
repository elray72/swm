import * as React from 'react';
import classNames from 'classnames';
import './_hero.scss';

interface IProps {
	children?: React.ReactNode,
	className?: string,
	title: string,
	intro: string,
}

export class Home extends React.PureComponent<IProps> {

	render() {
		const componentClass: string = classNames(this.props.className, 'hero');

		return (
			<div className={componentClass}>
				<div className="hero__inner">
					<h1 className="hero__heading">{this.props.title}</h1>
					<p className="hero__text intro">{this.props.intro}</p>
				</div>
			</div>
		);
	}
}

export default Home;
