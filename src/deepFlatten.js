"use strict";
const flatten = require('./flatten');

module.exports = function deepFlatten(array){
  return flatten(array.map(function(item){
    return Array.isArray(item) ? deepFlatten(item) : item;
  }));
}
