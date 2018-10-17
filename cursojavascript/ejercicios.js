// var _name = 'Adios';
// var _rName = '';
// for (var j in _name) {
//   _rName =   _name[j] + _rName ;
//   console.log(_rName);
// }


// var _palabra = 'mariposa';
// var _vocales = 'aeiou';

// var uelemento = _palabra.substr(-1);

// console.log(uelemento);


//  console.log(_vocales.indexOf(uelemento));



// var tenisObj = new Object();
// tenisObj.colorPrincipal = 'blue',
// tenisObj.talla =[{
    
//     pais:'MX',
//     valor:'27',
//     unidad:'cm'
// },
// {
//     pais:'COL',
//     valor:'40',
//     unidad:'cm'
// }];



// var carroObj = new Object();
//       carroObj=[{
//         color : 'red',
//         marca : 'BMW',
//         modelo : 'snake'
//       },
//     {
//         color : 'blue',
//         marca : 'ferrari',
//         modelo : 'wte'   
//     },
//         {
//         color : 'yellow',
//         marca : 'toyota',
//         modelo : 'j345'        
//     }];

//     carroObj.forEach(function(Obj,index){
//         console.log('Posición del objeto: ',index);
//         for(var i in Obj){
//             console.log(i, ':',Obj[i]);
//         }
        
//     });




function Pelicula(titulo,director,precio,descuento,anio) {
	this.titulo = titulo;
	this.director = director;
	this.precio = precio;
	this.descuento = descuento;
	this.anio = anio;
}

var stock = [];

var venom = new Pelicula('Venom','Fox',{ moneda:'MXN', cantidad: 500 }, { activo: false, cantidad: 30 }, 2018);

var islaDePerros = new Pelicula('Isla de perros','Wes Anderson',{ moneda:'MXN', cantidad: 300 }, { activo: true, cantidad: 20 }, 2018);

var transformers = new Pelicula('Transformers','michael bay',{ moneda:'MXN', cantidad: 300 }, { activo: true, cantidad: 20 }, 2010);

var avengers = new Pelicula('Avengers','james cameron',{ moneda:'MXN', cantidad: 300 }, { activo: true, cantidad: 20 }, 2012);

var star_wars = new Pelicula('Star Wars','JJ Abrams',{ moneda:'MXN', cantidad: 300 }, { activo: true, cantidad: 20 }, 2018);

        stock.push(star_wars,venom,islaDePerros,transformers,avengers);

        console.log(stock);


        var result = stock.filter(stock =>stock.anio = '2018');

        // console.log(result);