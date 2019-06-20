import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import TileList from './index';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('Pages: Home', () => {

	const wrapper = shallow(<TileList />);

	it('Renders', () => {
		expect(wrapper.exists()).toBeTruthy();
	});

});
