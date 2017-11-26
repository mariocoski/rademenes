# rademenes

[![CircleCI](https://circleci.com/gh/mariocoski/rademenes.svg?style=svg)](https://circleci.com/gh/mariocoski/rademenes)
[![codecov](https://codecov.io/gh/mariocoski/rademenes/branch/master/graph/badge.svg)](https://codecov.io/gh/mariocoski/rademenes)

minimalistic java script utility library providing pluck and pick methods

[Link to the article](http://withjavascript.com/blog/create-and-publish-your-first-npm-package)

## Installation
```javascript
   yarn add rademenes 
   //or
   npm install rademenes --save
```

## Usage
```javascript
  //require at the top of your script
  const R = require('rademenes');

  //PLUCK 
  const arrayOfObjects = [ 
    { id: 1, name: 'Thomas' },
    { id: 2, name: 'Mariusz' },
    { id: 3, name: 'John' } 
  ];  

  const onlyNames = R.pluck(arrayOfObjects, 'name');
  console.log(onlyNames);  // prints ['Thomas', 'Mariusz', 'John']
  
  //PICK
  const input = { firstname: 'John', lastname: 'Doe', age: 25, isAdmin: true };
  const fillable = [ 'firstname', 'lastname', 'age' ];
  const onlyFillable = R.pick(input, fillable);
  
  console.log(onlyFillable); //prints { firstname: 'John', lastname: 'Doe', age: 25 };
```

## Tests
```javascript
  yarn test 
  //or
  npm test
```

## Contributing
When contributing to this repository, please first discuss the 
change you wish to make via issue, email, or any other method 
with the owners of this repository before making a change.

## Release History
* 0.1.0 Initial release
* 0.1.1 Added build and coverage badges
