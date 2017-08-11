'use strict';

// Load Modules

const K7 = require('./k7');

module.exports = (options) => {
  const k7 = new K7(options);

  k7.load();
  
  return k7.database;
};
