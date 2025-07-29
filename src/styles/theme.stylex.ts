import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
  pageBgDark: '#101014',
  butttonWhite: '#D9D9D9',
  black:      '#000',
  white:      '#fff',
  prim:       '#03318b',
  primHover:  '#032363',
  sec:        '#7d1641',
  darkbg:     '#101014',
  ash100:     '#f4f1fc',
  ash200:     '#e7e2f5',
  ash300:     '#d9d2ed',
  ash600:     '#a99fc5',
  ash900:     '#2c1f51',
});

export const fontSizes = stylex.defineVars({
  '20': '0.833rem',
  '24': '1rem',
  '26': '1.083rem',
  '28': '1.166rem',
  '30': '1.250rem',
  '32': '1.333rem',
  '40': '1.666rem',
  '48': '1.999rem',
  '56': '2.5rem',
  '64': '3rem',
});

export const fontWeights = stylex.defineVars({
  regular:  '400',
  medium:   '500',
  semibold: '600',
  bold:     '700',
});

export const tokens = stylex.defineVars({
  colWidth: '100%',
  colCount: '12',
});

export const fontFamilies = stylex.defineVars({
  libre: "'Libre Baskerville', serif",
  roboto: "'Roboto Variable', sans-serif",
  digital: "'DSEG14 Classic', monospace",
});
