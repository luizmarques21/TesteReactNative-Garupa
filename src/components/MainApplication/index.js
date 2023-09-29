import React, { Component } from 'react';
import {
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	View,
} from 'react-native';

export default class MainApplication extends Component {
	render() {
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: '#dedede' }}>
				<KeyboardAvoidingView
					style={{ flex: 1 }}
					behavior={Platform.select({
						ios: 'padding',
						android: undefined,
					})}
				>
					<View style={{ flex: 1 }}>{this.props.children}</View>
				</KeyboardAvoidingView>
			</SafeAreaView>
		);
	}
}
