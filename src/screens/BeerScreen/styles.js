import { StyleSheet } from 'react-native';
import { verticalScale, moderateScale } from '../../utils';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: verticalScale(16),
		paddingHorizontal: moderateScale(12),
	},
	imagem: {
		height: verticalScale(250),
		width: moderateScale(200),
		alignSelf: 'center',
		marginVertical: verticalScale(16),
	},
	containerTags: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		flexShrink: 1,
		marginBottom: verticalScale(16),
	},
	titulo: {
		fontSize: moderateScale(24),
		fontWeight: 'bold',
		color: '#000',
		alignSelf: 'center',
	},
	descricao: {
		fontSize: moderateScale(18),
		color: '#000',
		textAlign: 'justify',
		marginBottom: verticalScale(16),
	},
	label: {
		fontSize: moderateScale(20),
		color: '#000',
		fontWeight: 'bold',
		marginBottom: verticalScale(8),
	},
	tag: {
		backgroundColor: '#fff',
		color: '#000',
		fontSize: moderateScale(20),
		padding: moderateScale(10),
		marginRight: moderateScale(10),
		borderRadius: moderateScale(10),
	},
	value: {
		color: '#000',
		fontSize: moderateScale(20),
		marginBottom: verticalScale(16),
	},
});
