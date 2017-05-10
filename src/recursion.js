// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
    if (n < 0) {
        return null;
    }
    if(n < 2) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
return (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
}

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
       if (array[i] instanceof Array) { sum += arraySum(array[i]);}
       if (array[i] === Math.round(array[i])) {sum += array[i];}
    }
   return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
   if (n < 0) {
   return isEven(-n);
} else if (n == 1) {
   return false;
} else if  (n == 0) {
   return true;
} else {
   return isEven(n - 2);
}
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 1) {
    return 0;
  }
  if (n===0) {
    return 0;
  }

  if (n < 0) {
    return (n + 1) + sumBelow(n+1);
  }

  if (n === 2) {
    return 1;
  }

  return (n-1) + sumBelow(n-1);

};


// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  if (Math.abs(x -y) <= 1) return [];
  return y < x ?[x-1].concat(range(x-1, y)):[x+1].concat(range(x+1,y));
};







// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {

if (exp === 0) {
  return 1;
}

if (exp < 0) {
  return exponent(base, exp+1)/base;
}

return base * exponent(base, exp-1);


};


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
       return n == 1 ? true : (n < 1 ? false : powerOfTwo(n/2));
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  return string === "" ? "" : string[string.length-1] + reverse(string.slice(0,-1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
if (string.indexOf(" ") !== -1) {
  string = string.replace(/\s/g, "");
}

if (string.length === 1 || string.length === 0 ) {
  return true;
}

if (string[0].toLowerCase() === string[string.length-1].toLowerCase()) {
  return palindrome(string.slice(1,string.length-1));
}

return false;

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {

  return x -(y * (Math.floor((x/y))));

};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  if(x === 0 || y === 0){
    return 0;
  }

  if (x < 0 && y < 0) {
    x = -x;
    y = -y;
  }
  return x + (multiply(x, y-1));
};


// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1));
  }
  return false;

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  let result = arguments[1] || [];

  if (str.length === 0) {
    return result;
  }

  return result.concat(str.slice(0,1), createArray(str.slice(1)));

};
// 17. Reverse the order of an array
var reverseArr = function (array) {
  return (!array.length) ? array : reverseArr(array.slice(1)).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  let result = Array.from(arguments)[2] || [];
  if (length === 0) {
    return [];
  }
    result.push(value)
    return result.concat(buildList(value,length - 1));
};
// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  let counter = arguments[2]||0;
  let result = arguments[3]||0;
  if (!array.length) {
    return counter;
  }
  if (array[0] === value) {
    counter+=1;
  }
return countOccurrence(array.slice(1), value, counter, result);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
    let index = Array.from(arguments)[2]||0;
    let result = Array.from(arguments)[3]||[];

    if (array.length === index) {
      return [];
    }

    return result.concat(callback(array[index], index, result), rMap(array, callback, ++index, result));
  }

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
// console.log(count);



};

// console.log(countKeysInObj({'hey': 'you', 'what\'s': 'up', 'do': 'you'}, 'you'));

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(index, result = [0, 1]) {
  if (index < 1) {
    return null;
  }
  if (index === result.length - 1) {
    return result;
  }
  return fibonacci(index, result.concat(result.slice(-1)[0] + result.slice(-2,-1)[0]));

}
// console.log(fibonacci(5));

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(index, result = [0, 1]) {
  if (index === 0) {
    return 0;
  }
  if (index < 0) {
    return null;

  }
  if (index === result.length - 1) {
    return result[index];
  }
  return nthFibo(index, result.concat(result.slice(-1)[0] + result.slice(-2,-1)[0]));
}

// console.log(nthFibo(7));

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  if (!input.length) {
    return input;
  }

  return [].concat(input[0].toUpperCase(),capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  if (!array.length) {
  return array;
}
let word = array[0][0].toUpperCase() + array[0].slice(1);
  array.shift();
  return [word].concat(capitalizeFirst(array));
}

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {

};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  return arrays.reduce(function (memo, next) {
      return memo.concat(Array.isArray(next) ? flatten(next) : next);
    }, []);
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}

each = function(collection, iterator) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            iterator(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            iterator(collection[key], key, collection);
        }
    }
};

reduce = function(collection, iterator, accumulator) {
    if (arguments.length === 2) {
        var test = true;
    }
    each(collection, function(value, key, collection) {
        if (test) {
            accumulator = value;
            test = false;
        } else {
            accumulator = iterator(accumulator, value, key, collection);
        }
    });
    return accumulator;
};


var defaults = function(obj) {
    var args = Array.from(arguments);
    var destinationObj = {};

    if (args.length > 1) {
        each(args, function(objs, i, args) {
            each(objs, function(value, key, objs) {
                if (obj[key] === undefined) {
                    obj[key] = value;
                }

            });
        });
        return obj;
    }
}


extend = function(obj) {
    var args = Array.from(arguments);

    if (args.length > 1) {
        return reduce(args, function(memo, nextObject) {
            nextObject === memo;
            return Object.assign(memo, nextObject);
        })
    }
};


var letterTally = function(str, obj = {}) {
  // return dogs["breed"].reduce(function(memo, next) {
  //   console.log(next);
  // })
  // var counter = 0;

  // str = str.toString().split("");

  //  console.log(typeof str[0].toString());
  // console.log(str);
  // console.log(str);
  // console.log(obj);

  if (str.length === 0) {
    return obj;
  }





console.log(obj);
//
// for (var str[0] in obj) {
  if (obj[str[0]] === undefined) {
    obj[str[0]] = 1;
  }

  else {
    obj[str[0]]+=1
  }

// console.log(Object.keys(obj));

  // if (obj.hasOwnProperty(str[0].toString())) {
// for (var i = 0; i < (Object.keys(obj)).length; i++) {

  // if (Object.keys(obj)[i]=== str[0].toString()) {
  //     obj[str[0].toString()]

// // if(key === str[0].toString()) {
//   // obj[key.toString()] = counter + 1;
//         // k = str[0]
//         //     console.log(k);
//         // obj[k] = counter + 1;
//
//   // if (key === obj[str[0].toString()]) {
//
// console.log(typeof Object.keys(obj)[i])


// obj[str[0]] = counter;

// console.log(obj);


  return letterTally(str.slice(1), obj);



}


var dogs = {
  "breed" : "dachshund",
  "slang" : "weenie"
}
//
// console.log(letterTally("hello"));


// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, result = []) {

  if (list.length === 0) {
    return result;
  }

  if (list[0] !== list[1]) {
    result.push(list[0]);
  }
  // console.log(list.slice(0,list.length-1));
  return compress(list.slice(1), result);

};

// console.log(compress([3,3,5,1,2,2,4]))
// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, result = []) {
    console.log[result];
  if (array.length === 0) {
    return result;
  }
  if (array[0] !== 0) {
    result.push(array[0]);
  }
  if (array[0] === 0 && array[1] !== 0) {
      result.push(array[0]);
  }
    return minimizeZeroes(array.slice(1), result);
  // console.log(list.slice(0,list.length-1));


};

// console.log(minimizeZeroes([2,0,0,0,1,0,1,0,4]))

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, result = [], index = 0) {
    if (array.length === 0) {

      return result;
    }


    if (result.length === 0 ) {
      if (array[0] < 0) {
          result.push(-(array[0]));
          console.log("first recursion index", array[0]);
      }
    else {
      result.push(array[0]);
      console.log("if result is not empty and index is positive", array[0])

      }
    }

    else if (result.length%2 === 0 && result.length !== 0) {
      console.log("length of result if even and > one", result.length)
      if (array[0] < 0) {
          result.push(-(array[0]));

      }
      else {
          result.push((array[0]));

      }
    }

    else if (result.length%2 !== 0) {
      if (array[0] > 0) {
          result.push(-(array[0]));

      }
      else {
          result.push((array[0]));

      }
    }


    return alternateSign(array.slice(1), result);


};
// console.log(alternateSign([-2,7,8,3,-1,4]));
// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, result = []) {

  if (typeof str === "string") {
    str = str.split(" ");
  }
  if (str.length === 0) {
    return [];
  }
  var array = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  for (var i =0; i < array.length; i++) {
  if (str[0] === i.toString()) {
    str[0] = array[i];
  }
}
    return result.concat(str[0], numToText(str.slice(1))).join(" ");

};
console.log(numToText("I have nothing 2 share 4 you"));
// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};
