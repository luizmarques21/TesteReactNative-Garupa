import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
	size + (scale(size) - size) * factor;

const dateBr = (date) => date.split('-').reverse().join('/');

export { scale, verticalScale, moderateScale, dateBr };
