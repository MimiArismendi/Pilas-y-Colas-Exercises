var nombres = [];

function Persona() {
  var elementos = [];

  function enqueue(elemento){
    this.elementos.push(elemento);
  }
  function empty(){
    return this.elementos.length == 0;
  }

}
var nombre = new Persona();
var nombre = [];
  nombre.enqueue("Ana ");
  nombre.enqueue("Less ");
  nombre.enqueue("Sue ");
  nombre.enqueue("Vale ");
  nombre.enqueue("Angie ");

var apellido = new Persona();
var apellido = [];
  apellido.enqueue("Salazar");
  apellido.enqueue("Perdomo");
  apellido.enqueue("Martinez");
  apellido.enqueue("de Leon");
  apellido.enqueue("Velazquez");
    for(var i = 0; i < nombre.length; i++ ){
      nombres.push(nombre.dequeue()+apellido.dequeue());
}

console.log(nombres);
