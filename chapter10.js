var month = function() {
  var names = ["Jan", "Feb", "March", "April", "May",
               "June", "July", "August", "Sept", "Oct",
               "Nov", "Dec"];
  return {
    name: function(number) { return names[number]; },
    number: function(name) { return names.indexOf(name); }
  };
}();


console.log(month.name(2));
// → March
console.log(month.number("Nov"));
// → 10
