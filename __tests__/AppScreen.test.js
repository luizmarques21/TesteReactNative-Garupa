/**
 * @format
 */
import React from 'react';
import AppScreen from '../src/screens/AppScreen';

// Note: test renderer must be required after react-native.
import { render } from '@testing-library/react-native';

test('renders correctly', () => {
	render(<AppScreen />);
});
