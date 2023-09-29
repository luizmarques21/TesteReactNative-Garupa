import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const BeerPanel = ({ beer }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			style={styles.mainContainer}
			onPress={() => {
				navigation.navigate('BeerInfo', { beer });
			}}
		>
			<View style={styles.containerImagem}>
				<Image
					resizeMode='cover'
					style={styles.imagem}
					source={{ uri: beer.image_url }}
				/>
			</View>
			<View style={styles.containerTexto}>
				<Text style={styles.nome}>{beer.name}</Text>
				<Text style={styles.descricao}>{beer.description}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default BeerPanel;
