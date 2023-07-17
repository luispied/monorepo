import * as React from 'react';

export interface ButtonProps {
	label: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ label, onClick }: ButtonProps) {
	return <button onClick={onClick}>{label}</button>;
}
