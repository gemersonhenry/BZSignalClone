// Custom colors

export const COLORS = {
  primary: '#3777f0',
  black: 'rgba(33, 33, 33, 1)',
  gray_0: 'rgba(66, 66, 66, 1)',
  gray_1: 'rgba(97, 97, 97, 1)',
  gray_2: 'rgba(117, 117, 117, 1)',
  gray_3: 'rgba(158, 158, 158, 1)',
  gray_4: 'rgba(189, 189, 189, 1)',
  gray_5: 'rgba(224, 224, 224, 1)',
  gray_6: 'rgba(238, 238, 238, 1)',
  white: '#ffffff'
}

// Colors by default

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
