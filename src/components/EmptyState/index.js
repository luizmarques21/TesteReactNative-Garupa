import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';
import styles from './styles';

export default class EmptyState extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Icon name='close-circle-outline' size={50} color={'#000000'} />
				<Text style={styles.message}>Nenhum filme encontrado</Text>
			</View>
		);
	}
}
