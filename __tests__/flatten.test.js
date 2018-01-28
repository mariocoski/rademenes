"use strict";
const flatten = require('../src/flatten');

test('it should flatten array single level deep', function(){
  const testArr = [[1,2],[3,4,5],[6]];
  expect(flatten(testArr)).toEqual([1,2,3,4,5,6]);
});
