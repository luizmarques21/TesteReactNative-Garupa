/**
 * @format
 */
import React from 'react';
import BeerScreen from '../src/screens/BeerScreen';

// Note: test renderer must be required after react-native.
import { render } from '@testing-library/react-native';

test('renders correctly', () => {
	render(<BeerScreen />);
});
