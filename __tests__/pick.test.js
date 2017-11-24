"use strict";
const pick = require('../src/pick');

test('it could pick a single property from an object', function(){
  const testObj = {a:1, b:2, c: 3};
  expect(pick(testObj, 'b')).toEqual({ b:2 });
});

test('it could only pick a property which exist on object', function(){
  const parent = {z: 12};
  const testObj = Object.create(parent);
  expect(pick(testObj, 'z')).not.toHaveProperty('z');
});

test('it should pick many keys from an object if array given as an argument', function(){
  const parent = {z:3};
  const testObj = Object.create(parent);
  testObj['a'] = 12;
  expect(pick(testObj,['a','z'])).toHaveProperty('a');
  expect(pick(testObj,['a','z'])).not.toHaveProperty('z');
});
