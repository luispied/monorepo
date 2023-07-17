import * as React from 'react';

export interface InputProps {
	value?: string;
	defaultValue?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	testId?: string;
}

export function Input({ value, defaultValue, onChange, testId }: InputProps) {
	return (
		<input
			type="text"
			value={value}
			defaultValue={defaultValue}
			onChange={onChange}
			data-testid={testId}
		/>
	);
}
