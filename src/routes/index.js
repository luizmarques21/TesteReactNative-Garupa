import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppScreen from '../screens/AppScreen';
import BeerScreen from '../screens/BeerScreen';

const Stack = createStackNavigator();

const Routes = () => {
	return (
		<Stack.Navigator initialRouteName='App'>
			<Stack.Screen
				name='App'
				component={AppScreen}
				options={{ title: 'Lista de produtos' }}
			/>
			<Stack.Screen
				name='BeerInfo'
				component={BeerScreen}
				options={{ title: 'Detalhes do produto' }}
			/>
		</Stack.Navigator>
	);
};

export default Routes;
