// Exercise 1
var min = function(num1, num2) {
  if (num1 < num2)
    return num1;
  else
    return num2;
}

//Exercise 2
var isEven = function(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}

//Exercise 3
var countChar = function(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

var countBs = function(string) {
  return countChar(string, "B");
}
