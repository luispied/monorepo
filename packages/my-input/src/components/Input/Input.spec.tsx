/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '.';

test('renders input', async () => {
	render(<Input testId="input" />);

	const input = screen.getByTestId('input');

	userEvent.type(input, 'test string');

	await waitFor(() => {
		expect(screen.getByDisplayValue('test string')).toBeDefined();
	});
});
