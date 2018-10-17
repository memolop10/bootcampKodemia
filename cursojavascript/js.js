//Ouput
// console.log('hola profe');

// var _nombre = 'memo';
// var _apellido = 'lopez';
// var _edad = undefined;
// var _programador = true;
// var _buenaspracticas = null;

// typeof _nombre;


//operadores de asignacion

// +
// -
// /
// *
// ** exponencial
// % residuo



//operadores de comparacion

// == valor

// != diferente de

// > menor que

// < mayor que


// var _dias = 15000;

// var restante = _dias%365;
 


// var years = (_dias-restante)/365;
// console.log(years)

// var meses_res= restante%30;

// var meses = (restante -meses_res )/30; 


// console.log(meses)
// console.log(meses_res)

 

// var _anios = 21;
// var _meses = 10;
// var _dias  = 18;

// var _diasVividos = ( _anios * 365 ) + ( _meses * 30 ) + _dias;

// console.log(_diasVividos)

 








// IF


// var _nombre = 'nombre1';

// if(_nombre === 'nombre1'){
//     console.log('si es identico')
// }else if(_nombre === '' ){

// }



// SWICHT





// var palabra = 'Hola';
// var recorrido = '';
// for(var i in palabra){

//     recorrido = palabra[i] + recorrido; 

    

// }

// console.log(recorrido)






var cadena = "* ";
var piramide="";


for(var i = 0; i<5; i++){
    piramide += cadena;
    console.log( piramide + '\n' );


}

var correos = ['david.uno@gmail.com','gabriel.d@hotmail.com'];

var encontrado = correos.includes('daviduno@gmail.com');

if(encontrado === true){
    console.log( 'registrate con otro correo');
}else{
    console.log('registrado')
}


