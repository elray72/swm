import * as React from 'react';
import styled from 'styled-components';

interface IProps {
	className?: string,
	src: string | undefined,
	alt: string,
}

export const LogoContainer = styled.div`
	position: relative;
`;

export const LogoImage = styled.img`
	display: block;
	width: 100%;
	height: auto;
	color: inherit;
`;

export const Logo: React.FC<IProps> = (props) => {
	return (
		<LogoContainer className={props.className}>
			<LogoImage src={props.src} alt={props.alt} />
		</LogoContainer>
	);
};

export default Logo;
