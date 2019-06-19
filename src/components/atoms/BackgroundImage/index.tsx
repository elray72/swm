import * as React from 'react';
import styled from 'styled-components';

interface IProps {
	className?: string,
	src: string | undefined,
	alt: string,
}

export const BgImageContainer = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
`;

export const BgImage = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const BackgroundImage: React.FC<IProps> = (props) => {

	return (
		<BgImageContainer className={props.className}>
			<BgImage src={props.src} alt={props.alt} />
		</BgImageContainer>
	);
};

export default BackgroundImage;
