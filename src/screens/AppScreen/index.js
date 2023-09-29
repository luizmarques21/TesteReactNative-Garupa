import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { BeerPanel, MainApplication } from '../../components';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { clearList, getList, incrementPage } from '../../redux/action';

const AppScreen = () => {
	const [loadingMore, setLoadingMore] = useState(false);
	const page = useSelector((state) => state.page);
	const beerList = useSelector((state) => state.beerList);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getList(page));
	}, []);

	const refreshList = () => {
		dispatch(clearList());
		dispatch(getList(page));
	};

	const loadMore = () => {
		setLoadingMore(true);
		dispatch(incrementPage());
		dispatch(getList(page));
		setLoadingMore(false);
	};

	const renderItem = ({ item }) => {
		return <BeerPanel beer={item} key={Math.random()} />;
	};

	return (
		<MainApplication>
			<View style={styles.containerLista}>
				<FlatList
					onEndReachedThreshold={0.2}
					data={beerList}
					onEndReached={() => loadMore()}
					onRefresh={() => refreshList()}
					refreshing={loadingMore}
					contentContainerStyle={{ flexGrow: 1 }}
					renderItem={renderItem}
					style={styles.lista}
				/>
			</View>
		</MainApplication>
	);
};

export default AppScreen;
