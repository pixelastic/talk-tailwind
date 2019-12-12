/* eslint-disable import/no-commonjs */
const config = require('sov/build/tailwind.config.js');
const _ = require('golgoth')._;

const newConfig = { ...config };
const spacing = {
  ...newConfig.theme.spacing,
  '8vh': '8vh',
  '8p': '8%',
};

const scale = [1, 1.25, 1.5, 1.875, 2.25, 3, 4, 6, 8, 10, 12];
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
