var nombres = [];

function Persona() {
  var elementos = [];

  this.push = function(elemento){
    elementos.push(elemento);
  }
  this.isEmpty = function(){
    return elementos.length == 0;
  }

}
var nombre = new Persona();
var nombre = [];
  nombre.push("Ana ");
  nombre.push("Less ");
  nombre.push("Sue ");
  nombre.push("Vale ");
  nombre.push("Angie ");

var apellido = new Persona();
var apellido = [];
  apellido.push("Salazar");
  apellido.push("Perdomo");
  apellido.push("Martinez");
  apellido.push("de Leon");
  apellido.push("Velazquez");
    for(var i = 0; i < nombre.length; i++ ){
      nombres.push(nombre.pop()+apellido.pop());
}

console.log(nombres);
