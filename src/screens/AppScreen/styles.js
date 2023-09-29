import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../utils';

const styles = StyleSheet.create({
	containerLista: {
		flex: 1,
		backgroundColor: '#dedede',
		paddingVertical: verticalScale(20),
		paddingHorizontal: moderateScale(10),
	},
	lista: {
		flexGrow: 1,
		backgroundColor: '#dedede',
		marginTop: verticalScale(16),
	},
});

export default styles;
