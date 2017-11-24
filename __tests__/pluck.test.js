"use strict";
const pluck = require('../src/pluck');

test('it can pluck values for a given key from array of objects', function(){
  const data = [ { id: 1, name: 'Thomas' }, { id: 2, name: 'Lukas' }, { id: 3, name: 'Ann' } ];
  expect(pluck(data, 'name')).toEqual(['Thomas','Lukas','Ann']);
});

test('it can pluck values for a given key only when object has it as own property', function(){
  const person = { id: 3, name: 'William'};
  const ann = Object.create(person);
  //second object has no property name, third one inherits those properties from person
  //hence doesn’t have own ones
  const data = [ { id: 1, name: 'Thomas' }, { id: 2 },ann];
  expect(pluck(data, 'name')).toEqual(['Thomas']);
});

