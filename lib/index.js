'use strict';

// Load Modules

const K7 = require('./k7');

exports.register = (options) => {
  const k7 = new K7(options);

  k7.load();
  
  return k7.database
};

exports.register.attributes = {
  pkg: require('../package.json')
};
