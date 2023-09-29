import React from 'react';
import { BeerPanel } from '../src/components';
import { render } from '@testing-library/react-native';

test('renders correctly', () => {
	render(<BeerPanel />);
});
