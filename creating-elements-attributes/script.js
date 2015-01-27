(function(){

var doc = document,
  pFoo = doc.getElementById("foo");

var html = el.innerHTML;

html = html + "<br>This was, too1</br>";
html = html + "<br>This was, too2</br>";
html = html + "<br>This was, too3</br>";

pFoo.innerHTML = html;
// doc.body.appendChild(el);

}());
