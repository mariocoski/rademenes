"use strict";
module.exports = function(obj, key){
  const newObj = {};
  if(typeof key === 'string' && obj.hasOwnProperty(key)){
    newObj[key] = obj[key];
  }
  
  if(typeof key === 'object' && key.constructor === Array){
    key.forEach(function(prop){
      if(obj.hasOwnProperty(prop)){
         newObj[prop] = obj[prop];
      }
    });
  }
  return newObj;
}
