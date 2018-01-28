"use strict";
const deepFlatten = require('../src/deepFlatten');

test('it should deeply flatten array', function(){
  const testArr = [[1,[2,3,[4,5,[6]]]],[7,[8,9]]];
  expect(deepFlatten(testArr)).toEqual([1,2,3,4,5,6,7,8,9]);
});
