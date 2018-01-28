"use strict";
module.exports = function(array){
  return array.reduce(function(a, b){
   return a.concat(b);
  }, []);
}
