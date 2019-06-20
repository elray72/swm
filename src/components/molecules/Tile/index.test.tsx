import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Tile from './index';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('Pages: Home', () => {

	const props = {
		className: 'ring',
		colour: 'ColourOption | any',
		description: 'string',
		href: 'string',
		image: 'string',
		logo: 'string',
		logoAlt: 'string',
		target: 'string',
		title: 'string',
		theme: 'TileType',
	};
	
	const wrapper = shallow(<Tile {...props} />);

	it('Renders', () => {
		expect(wrapper.exists()).toBeTruthy();
	});

});
