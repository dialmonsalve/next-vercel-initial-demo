import { ReactNode } from 'react';

interface Props {
	children:ReactNode
}


const style = {
	backgroundColor: 'rgba(0,0,0,0.3)',
	padding: '10px',
	borderRadius: '5px',
}
export const DarkLayout = ({ children }:Props) => {

	return (
		<div style={style}>
			<h3>DarkLayout</h3>
			<div>
				{children}
			</div>
		</div>
	)
}
