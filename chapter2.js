// Exercise 1
var string = '';
console.log('#');
for (var i=0;i<6;i++){
  string = string + '#';
  console.log(string+'#');
}

// Exercise 2
for(var i=1; i<=100; i++) {
  if(i%3===0 && i%5!==0){
    console.log('Fizz');
  }
  else if(i%5===0 && i%3!==0){
    console.log('Buzz');
  }
  else if(i%3===0 && i%5===0){
    console.log('FizzBuzz');
  }
  else {
    console.log(i);
  }
}

// Exercise 3
