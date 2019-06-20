import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import BackgroundImage, { BgImage} from './index';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('Atoms: BackgroundImage', () => {

	describe('All props', () => {

		const props = {
			className: "bg-image",
			src: "image.jpg",
			alt: "This is an image",
		};

		const wrapper = shallow(<BackgroundImage {...props} />);

		it('component renders', () => {
			expect(wrapper.exists()).toBe(true);
		});

		it('component should have class name', () => {
			expect(wrapper.hasClass(props.className)).toBe(true);
		});

		it('component should render image', () => {
			expect(wrapper.find(BgImage).exists()).toBe(true);
		});

		it('image should have src and alt props', () => {
			expect(wrapper.find(BgImage).prop('src')).toBe(props.src);
			expect(wrapper.find(BgImage).prop('alt')).toBe(props.alt);
		});

	});

});



