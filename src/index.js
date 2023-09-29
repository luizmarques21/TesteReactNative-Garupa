import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Routes from './routes';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
	return (
		<Provider store={store}>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<NavigationContainer>
					<Routes />
				</NavigationContainer>
			</GestureHandlerRootView>
		</Provider>
	);
};

export default App;
