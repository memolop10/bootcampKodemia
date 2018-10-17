// var kodemiaArray = [
//     {
//       'name': 'Memo',
//       'age': '26'
//     },
//     {
//       'name': 'Dani',
//       'age': '23'
//     },
//     {
//       'name': 'D',
//       'age': '24'
//     },
//     {
//       'name': 'Raquel',
//       'age': '16'
//     },
//     {
//       'name': 'Misa',
//       'age': '25'
//     },
//   ]

  


//   kodemiaArray.forEach(function(element) {
//     create(element);
//   });

//   function create(obj){
//       console.log(obj);
//   }


  // var $newElement = document.createElement('tr');
  // var $newNombre = document.createElement('td');
  // var $newAge = document.createElement('td');

  // var $paraNombre = document.createTextNode('obj.name');
  // var $paraAge = document.createTextNode('obj.age');

  // $newNombre.appendChild($paraNombre);
  // $newAge.appendChild($paraAge);


  var kodemiaArray = [
    {
      'name': 'Memo',
      'age': '26',
      'nacionalidad': 'mx'
  
    },
    {
      'age': '23',
      'name': 'Dani',
      'nacionalidad': 'mx'
    },
    {
      'name': 'D',
      'age': '24',
      'nacionalidad': 'mx'
    },
    {
      'name': 'Raquel',
      'age': '16',
      'nacionalidad': 'mx'
    },
    {
      'age': '25',
      'nacionalidad': 'mx',
      'name': 'Misa'
    },
  ]
  
  // itera el array (kodemiaArray)
  kodemiaArray.forEach(function(integrante) {
    // encapsulando el codigo en una función
    // integrante = current obj
    createTr(integrante);
  })
  
  function createTr(obj) {
    // creamos un tag tr
    var $tr = document.createElement('tr');
    // asignamos a un array todas las llaves del obj
    var $keysObj = Object.keys(obj).sort();
    // iteramos el array de las keys
    $keysObj.forEach(function (key) {
      // estamos creando dinamicamente las tag td
      // a travez de una función
      var $tdDynamic = createTd(obj[key]);
      // añadimos el td dinamico al tr
      $tr.appendChild($tdDynamic);
    })
    //añadimos el elemento tr (ya contiene todos los td) al tbody
    document.getElementsByTagName('tbody')[0].appendChild($tr);
  }
  
  
  // crea dinamicamente td
  function createTd(text) {
    // creando nodo td
    var $td = document.createElement('td');
    // creando el nodo de texto
    var $tdText = document.createTextNode(text);
        // añadiendo el nodo de text al nodo td
        $td.appendChild($tdText);
    // retornamos el td ya construido
    return $td;
  }