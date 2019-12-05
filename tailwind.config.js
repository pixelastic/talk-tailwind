/* eslint-disable import/no-commonjs */
const config = require('sov/build/tailwind.config.js');
const _ = require('golgoth')._;

const newConfig = { ...config };
const spacing = {
  ...newConfig.theme.spacing,
  '8vh': '8vh',
  '8p': '8%',
};

const scale = [1, 1.25, 1.5, 1.875, 2.25, 3, 4, 8, 12];
const scaleDown = [0.75, 0.5, 0.25];
const baseFontSize = 2;
let fontSize = _.transform(
  scale,
  (result, value, key) => {
    result[key + 1] = `${baseFontSize * value}rem`;
  },
  {}
);
fontSize = _.transform(
  scaleDown,
  (result, value, key) => {
    const prefix = _.repeat('0', key + 1);
    result[`${prefix}1`] = `${baseFontSize * value}rem`;
  },
  fontSize
);
console.info(fontSize);
// const fontSize = {
//   1: '2.625rem',
//   2: '2.625rem',
//   3: '2.625rem',
//   4: '2.625rem',
//   // 0: '0rem',
//   // '06': '0.25rem',
//   // '07': '0.5rem',
//   // '08': '0.75rem',
//   // '09': '0.875rem',
//   // 1: '1rem',
//   // 2: '1.125rem',
//   // 3: '1.25rem',
//   // 4: '1.5rem',
//   // 5: '1.875rem',
//   // 6: '2.25rem',
//   // 7: '3rem',
//   // 8: '4rem',
//   // 9: '8rem',
//   // 10: '12rem',
// }

newConfig.theme = {
  ...config.theme,
  borderWidth: spacing,
  height: spacing,
  maxHeight: spacing,
  maxWidth: spacing,
  minHeight: spacing,
  minWidth: spacing,
  spacing,
  fontSize,
  width: spacing,
};

module.exports = newConfig;
