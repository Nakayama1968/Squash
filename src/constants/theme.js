import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#194868', // Dark Blue
  secondary: '#FF615F', // peach

  // colors
  black: '#1E1F20',
  white: '#FFFFFF',
  lightGray: '#F5F7F9',
  lightGray2: '#FAFBFD',
  gray: '#BEC1D2',
  blue: '#42B0FF',
  darkgray: '#898C95',
  peach: '#FF615F',
  purple: '#8e44ad',
  red: '#FF0000',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding2: 36,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: { fontWeight: 'nomal', fontSize: SIZES.largeTitle, lineHeight: 55 },
  h1: { fontWeight: 'bold', fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontWeight: 'bold', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontWeight: 'bold', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontWeight: 'bold', fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontWeight: 'normal', fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontWeight: 'normal', fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontWeight: 'normal', fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontWeight: 'normal', fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
