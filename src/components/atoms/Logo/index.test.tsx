import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Logo, { LogoImage } from './index';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('Atoms: BackgroundImage', () => {

	describe('All props', () => {

		const props = {
			className: "logo-image",
			src: "logo.png",
			alt: "This is the logo",
		};

		const wrapper = shallow(<Logo {...props} />);

		it('component renders', () => {
			expect(wrapper.exists()).toBeTruthy();
		});

		it('component should have class name', () => {
			expect(wrapper.hasClass(props.className)).toBeTruthy();
		});

		it('component should render image', () => {
			expect(wrapper.find(LogoImage).exists()).toBeTruthy();
		});

		it('image should have src and alt props', () => {
			expect(wrapper.find(LogoImage).prop('src')).toBe(props.src);
			expect(wrapper.find(LogoImage).prop('alt')).toBe(props.alt);
		});

	});

});



