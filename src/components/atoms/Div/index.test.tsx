import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Div from './index';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('Atoms: Heading', () => {

	describe('Renders correct types', () => {

		const props = {
			className: "bg-image",
			theme: "image.jpg",
		};

		const wrapper = shallow(<Div {...props} />);

		it('Renders', () => {
			expect(wrapper.exists()).toBe(true);
		});

		it('Should have class name', () => {
			expect(wrapper.hasClass(props.className)).toBe(true);
			expect(wrapper.prop('className')).toBe(props.className);
		});

		it('Image should have theme props', () => {
			expect(wrapper.prop('theme')).toBe(props.theme);
		});

	});

	describe('No optional props', () => {

		const wrapper = shallow(<Div />);

		it('Renders', () => {
			expect(wrapper.exists()).toBe(true);
		});

		it('Should have not have { className, theme} props', () => {
			expect(wrapper.prop('className')).toBe(undefined);
			expect(wrapper.prop('theme')).toBe(undefined);
		});

	});

});
