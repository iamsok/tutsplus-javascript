/*var person = new Object();

person.firstName = "David";
person.lastName = "Sok";
person.getFullName = function(){
  return this.firstName +" " + this.lastName;

};*/

var person = { //literal notation. same as line one
  firstName : "David",
  lastName : "Sok",
  getFullName : function() {
    return this.firstName + " " + this.lastName;

  }
};

alert(person.getFullName());
