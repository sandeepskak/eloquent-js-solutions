//Exercise 1
arrays.reduce(function(a, b) {
  return a.concat(b);
});

//Exercise 2
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

ancestry = JSON.parse(ANCESTRY_FILE);
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

children = ancestry.filter(function(person) { return byName[person.mother] != null});

avgArray = [];
children.map(function(person){
	  avgArray.push((person.born - byName[person.mother].born));
});

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

//Exercise 3
ancestry = JSON.parse(ANCESTRY_FILE);
var byDied = {};
ancestry.forEach(function(person) {
  byDied[person.died] = (person.born - person.died);
});

var years = Object.keys(byDied);

var ages = Object.values(byDied);

var result = {};
for(var i=0; i<uniqueCenturies.length; i++){
  var tempAges = [];
  for(var j=0; j<years.length; j++) {
      if(Math.ceil(years[j] / 100) == uniqueCenturies[i]) {
        tempAges.push(ages[j]);
        result[uniqueCenturies[i]] = average(tempAges);
      }
  }
}

//Exercise 4

function every(array, action) {
  var result;
  array.forEach(function(item) {
    result = action(item);
  });
  return result;
}

function some(array, action) {
  var result;
  for(var i=0; i<array.length; i++) {
    result = action(array[i]);
    if(result) {
      result = true;
      break;
    }
  }
  return result;
}
