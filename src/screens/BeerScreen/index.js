import React, { Component } from 'react';
import { Image, ScrollView, ActivityIndicator, Text, View } from 'react-native';
import { MainApplication } from '../../components';
import Api from '../../api';
import { dateBr } from '../../utils';
import { styles } from './styles';

export default class BeerScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			beerInfo: {},
			loading: true,
		};
	}

	async componentDidMount() {
		const { beer } = this.props.route.params;

		await Api.getBeerInfo(beer.id).then((response) => {
			this.setState({ beerInfo: response.data[0], loading: false });
		});
	}

	renderInfo(label, value) {
		return (
			<>
				<Text style={styles.label}>{label}</Text>
				<Text style={styles.value}>{value}</Text>
			</>
		);
	}

	render() {
		const { loading, beerInfo } = this.state;
		const {
			name,
			image_url,
			description,
			tagline,
			first_brewed,
			food_pairing,
			brewers_tips,
			abv,
			ibu,
		} = beerInfo;

		return loading ? (
			<ActivityIndicator size='large' color='#000' />
		) : (
			<MainApplication>
				<ScrollView style={styles.container} bounces={false}>
					<Text style={styles.titulo}>{name}</Text>
					<Image
						resizeMode='cover'
						source={{
							uri: image_url,
						}}
						style={styles.imagem}
					/>
					<Text style={styles.descricao}>{description}</Text>
					{this.renderInfo('ABV', abv)}
					{this.renderInfo('IBU', ibu)}
					{this.renderInfo('Tagline', tagline)}
					{this.renderInfo('First brewed', dateBr(first_brewed))}
					{this.renderInfo('Food pairing', food_pairing.join('. '))}
					{this.renderInfo('Brewers tips', brewers_tips)}
				</ScrollView>
			</MainApplication>
		);
	}
}
