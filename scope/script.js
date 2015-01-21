var globalVar = "This is a global variable";

var globalFunction = function(paramOne){
  var localVar = "this is a local variable";

  var localFunction = function(){
    var superLocalFunction = "hello, world";
    alert(superLocalFunction);
    alert(localVar);
    alert(paramOne);
    alert(globalVar);
  };

  localFunction();
};

globalFunction(2);
