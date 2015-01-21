/*var foo = new Array(11, "hello", true);

var length = foo.length;

var value = foo[0];
foo[0] = 12;
foo[1] = 13;
*/

/*
var foo = [11, "hello", true];

var value = foo[0];

foo[3] = 15;
foo[4] = "whatever";

foo[foo.length] = " a new value";
foo.push("a new value");
*/

var names = ["David", "Dan"];
  names2 = ["Jess", "Jane"];

var people = names.concat(names2)

var joined = people.join(", ");

var reverse = people.reverse();

var sort = people.sort();

alert(people);
alert(joined);
alert(reverse);
alert(sort);
