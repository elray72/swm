import * as React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

const TileListContainer = styled.div`
`;

interface IProps {
	className?: string,
	children?: React.ReactNode,
}

export const TileList: React.FC<IProps> = (props) => {
	const componentClass: string = classNames(props.className, 'tile__list');
	return (
		<TileListContainer className={componentClass}>
			{props.children}
		</TileListContainer>
	);
};

export default TileList;
