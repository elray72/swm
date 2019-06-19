import * as React from 'react';
import styled from 'styled-components';

interface IProps {
	className?: string,
	type?: string,
}

const StyledDiv = styled.div``;

export const Div: React.FC<IProps> = (props) => {
	return <StyledDiv {...props} />
};

export default Div;

