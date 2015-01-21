var obj = "this is a string object",
  length = obj.length;

var index = obj.indexOf("is");
var index2 = obj.indexOf("is", index + 1);

var index3 = obj.lastIndexOf("is");

var substr = obj.substr(10,6);
var substring = obj.substring(0,4)

var newString = obj.replace("object", "value");

var upperCase = obj.toUpperCase();
var lowerCase = obj.toLowerCase();

alert(upperCase);
alert(lowerCase);
