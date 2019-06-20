import React from 'react';
import Enzyme, { mount } from 'enzyme';
import ATile, { Tile } from './index';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe('Molecules: Tile', () => {

	const common = {
		image: 'image.png',
		title: 'Heading text',
		logo: 'logo.png',
		logoAlt: 'Logo text',
		href: '#url',
		target: '_blank',
	};

	describe('Normal case', () => {

		const wrapper = mount(
			<ATile image={common.image}
						title={common.title}
						logo={common.logo}
						logoAlt={common.logoAlt} />
		);

		it('Renders', () => {
			expect(wrapper.find(Tile).exists()).toBe(true);
		});

		it('Tile is div', () => {
			expect(wrapper.getDOMNode().tagName).toBe('DIV');
		});

		it('Tile has no target', () => {
			expect(wrapper.find('.tile__logo img').prop('src')).toBe(common.logo);
			expect(wrapper.find('.tile__logo img').prop('alt')).toBe(common.logoAlt);
		});

		it('Background container renders', () => {
			expect(wrapper.exists()).toBe(true);
		});

		it('Background image renders', () => {
			expect(wrapper.find('.tile__bg').exists()).toBe(true);
		});

		it('Background image has src and alt', () => {
			expect(wrapper.find('.tile__bg img').prop('src')).toBe(common.image);
			expect(wrapper.find('.tile__bg img').prop('alt')).toBe(common.title);
		});

		it('Logo renders', () => {
			expect(wrapper.find('.tile__logo').exists()).toBe(true);
		});

		it('Logo image has src and alt', () => {
			expect(wrapper.find('.tile__logo img').prop('src')).toBe(common.logo);
			expect(wrapper.find('.tile__logo img').prop('alt')).toBe(common.logoAlt);
		});

	});

	describe('No logo', () => {

		const wrapper = mount(
			<ATile image={common.image}
						 title={common.title} />
		);

		it('Renders', () => {
			expect(wrapper.exists()).toBe(true);
		});

		it('Logo image does not render', () => {
			expect(wrapper.find('.tile__logo').exists()).toBe(false);
		});

	});

	describe('Tile wrapped by link', () => {

		const wrapper = mount(
			<ATile image={common.image}
						 title={common.title}
						 href={common.href}
						 target={common.target} />
		);

		it('Renders', () => {
			expect(wrapper.exists()).toBe(true);
		});

		it('Tile exists', () => {
			expect(wrapper.find('.tile').exists()).toBe(true);
		});

		it('Link wraps tile', () => {
			expect(wrapper.getDOMNode().tagName).toBe('A');
		});

		it('Link has href', () => {
			expect(wrapper.prop('href')).toBe(common.href);
		});

		it('Link has target', () => {
			expect(wrapper.prop('target')).toBe(common.target);
		});

	});

});
