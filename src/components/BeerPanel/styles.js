import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../utils';

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: '#ffffff',
		borderRadius: moderateScale(10),
		flexDirection: 'row',
		alignItems: 'center',
		minHeight: verticalScale(100),
		paddingVertical: verticalScale(8),
		marginBottom: verticalScale(12),
	},
	containerImagem: {
		paddingHorizontal: moderateScale(16),
	},
	imagem: {
		height: verticalScale(125),
		width: moderateScale(100),
	},
	containerTexto: {
		width: moderateScale(210),
		height: '100%',
	},
	nome: {
		fontWeight: 'bold',
		fontSize: moderateScale(18),
		color: '#000',
		marginBottom: moderateScale(8),
	},
	descricao: {
		fontSize: moderateScale(16),
		color: '#000',
	},
});

export default styles;
