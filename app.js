console.log('This is the app.js file');

const func = require('./functions.js');
const _ = require('lodash');


console.log(func.myFunc1(2, 3));
console.log(func.myFunc2(3, 3));

var StringCheck1 = 'See if it is a string';
var StringCheck2 = 21;
console.log(_.isString(StringCheck1));
console.log(_.isString(StringCheck2));

// var myArray= ['vlad', 'vlad', 'andrew', 1, 1, 6, 7, 7, 2, 3, 3, 3, 3, 4, 4, 4, 5];
// console.log('My Array ', myArray);
// myArray.sort();
// console.log('My Sorted Array ', myArray);
// console.log('My Sorted Unique Array', _.sortedUniq(myArray));

var myArray = ['vlad', 'vlad', 'andrew', 1, 1, 6, 7, 7, 2, 3, 3, 3, 3, 4, 4, 4, 5];
console.log('My Array: ', myArray);
console.log('My Sorted AND Unique Array: ', _.sortedUniq(myArray.sort()));
myArray.push('apple');
console.log(myArray);