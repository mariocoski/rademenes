"use strict";
module.exports = function(arrayOfObjects, key){
    //normally we would go with map method on array prototype
    //but is not available prior to IE9 hence we will use loops:
    const
 newArray = [];
    const length = arrayOfObjects.length;
    for(let i = 0; i < length; i++){
       if(arrayOfObjects[i].hasOwnProperty(key)){
          //we only wants values from an object which object owns,
          // not the values it has in prototype chain
          newArray.push(arrayOfObjects[i][key]);
       }
    }
    return newArray;
}

