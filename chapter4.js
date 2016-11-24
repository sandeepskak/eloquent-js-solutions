// Exercise 1
function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}


// Exercise 2
function reverseArray(array) {
  var result = [];
  for (var i = array.length -1; i >= 0; i--)
    result.push(array[i]);
  return result;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

// Exercise 3
function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

// Exercise 4
function deepEqual(param1, param2) {
  if (param1 === param2) return true;
  if(typeof param1 !== 'object' || typeof param2 !== 'object')
   return false;
  // both arguments are indeed objects:
  else {
    //return true;
    return compareProperties(param1, param2);
  }
}

function getPropertyCount(obj) {
  var properties = [];
  for(prop in obj) properties.push(prop);
  return properties.length;
}

function compareProperties(obj1, obj2) {
  var count1 = getPropertyCount(obj1);
  var count2 = getPropertyCount(obj2);
  if (count1 !== count2)
    return false;
  else {
    for(prop in obj1) {
      return deepEqual(obj1[prop], obj2[prop])
    }
  }
}
