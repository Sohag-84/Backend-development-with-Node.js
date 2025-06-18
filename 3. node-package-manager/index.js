const lodash = require('lodash');

const names = ['sohag','raiyan','sharif','shofiq'];

const capitalize = lodash.map(names,lodash.capitalize)

console.log(capitalize);
