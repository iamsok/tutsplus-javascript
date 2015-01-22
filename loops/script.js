//for loops
var names = ["dave", "james", "jenn", "paul"];

for (var i = 0, len = names.length; i < len;  i = i + 1){
  var name = names[i];

  alert(name);
}

//while loops
var names = ["dave", "james", "jenn", "paul"];

while (names.length > 0) {
  var element = names.pop();

  alert(element);
}

//do while loop
var names = [];

do {
  var element = names.pop();

  alert(element);
} while (names.length > 0);
