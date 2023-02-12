"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList(){
  this.head = null;
  //this._length (si quisiera aumentar la cantidad de nodos)
}

function Node(value) {
  this.value = value;
  this.next = null; 
}

LinkedList.prototype.add = function (value){
  var nodo = new Node(value);
  
  //lista vacia
  if(this.head == null){
    this.head = nodo;
  }
  //lista no esta vacia
  else {
    //defino mi pivote o punto de partida para recorrer
    var current = this.head;
    while(current.next !=null){ //utilizo while para iterar mas facilmente sobre los nodos hasta encontrar el ultimo (el que apuinta a null)
      current = current.next;
    }
    current.next = nodo; 
    //this._length ++ (si quisiera aumentar la cantidad de nodos)
  }
}

LinkedList.prototype.remove = function (){
  //lista vacia 
  if(this.head == null){
    return null;
  }
  //la lista tiene 1 solo nodo
  if(this.head.next == null){
   let valorNodoEliminado = this.head.value; //guardo el valor antes de eliminarlo 
   this.head = null; //quito todos los nodos y me quedo solo con el head
    return valorNodoEliminado;

  }
  //si hay mas de 1 nodo
  else{
    //debo preguntar si el siguiente tiene un siguente (si el next tiene un next)
    var current = this.head;
    while (current.next.next != null){
      current = current.next;
    }
    let valorNodoEliminado = current.next.value;
    current.next = null;
    return valorNodoEliminado;
  }
}

LinkedList.prototype.search = function (arg){
  if (this.head == null){
    return null;
  }
  var current = this.head;
  while (current != null){
    if (typeof arg === 'function'){
      if(arg(current.value) === true ){
        return current.value;
      }
    }
    if(current.value === arg){
      return current.value;
    }
    else {
      current = current.next;
    }
  }
  return null;
}





/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets //casillas// (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];

}

HashTable.prototype.hash = function (key){
  var total = 0;
  for ( let i = 0; i < key.length; i++) {
    total = total + key.charCodeAt(i);
  }
  var resultado = total %35;
  return resultado; 
}

HashTable.prototype.set = function (key, value){
  if (typeof key != 'string') throw new TypeError('Keys must be strings');

  var index = this.hash(key); //controla colisiones
  if(this.buckets [index] == null){
    this.buckets[index] = {};
  }
  this.buckets[index][key] = value; //{foo:'bar1', ofo: 'bar2'}
}


HashTable.prototype.get = function (key){
  var clave = this.hash(key);
  return this.buckets[clave][key];
}

HashTable.prototype.hasKey = function (key){
  var clave = this.hash(key);
  return this.buckets[clave].hasOwnProperty(key);
}

//Anotacion push guit
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
