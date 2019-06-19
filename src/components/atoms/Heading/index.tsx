import * as React from 'react';
import styled from 'styled-components';
import { ColourOption } from '../../../common/variables';

type HeadingTypes = 'H1' | 'H2' | 'H3' | 'H4' | 'H5';

interface IProps {
	type: HeadingTypes,
	className?: string,
	children?: React.ReactNode,
	colour?: ColourOption | any,
}

export const H1 = styled.h1``;
export const H2 = styled.h2``;
export const H3 = styled.h3``;
export const H4 = styled.h4``;
export const H5 = styled.h5``;

export const Heading: React.FC<IProps> = (props) => {

	switch (props.type) {
		case 'H1': {
			return <H1 className={props.className}>{props.children}</H1>;
		}
		case 'H2': {
			return <H2 className={props.className}>{props.children}</H2>;
		}
		case 'H3': {
			return <H3 className={props.className}>{props.children}</H3>;
		}
		case 'H4': {
			return <H4 className={props.className}>{props.children}</H4>;
		}
		case 'H5': {
			return <H5 className={props.className}>{props.children}</H5>;
		}
	}
};

export default Heading;
