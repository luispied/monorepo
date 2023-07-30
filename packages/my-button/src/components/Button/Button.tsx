import * as React from 'react';

export interface ButtonProps {
	label: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ label, onClick }: ButtonProps): React.JSX.Element => {
	return <button onClick={onClick}>{label}</button>;
};

export default Button;
