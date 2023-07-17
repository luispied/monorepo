/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './';

test('renders button', () => {
	render(<Button label="button test" />);
	expect(screen.getByRole('button', { name: 'button test' })).toBeDefined();
});
