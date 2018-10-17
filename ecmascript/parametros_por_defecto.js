// const suma = (x,y,z=10) => `La suma es: ${x+y+z}.`;
// console.log(suma(2,3,4));


// const asistencia = (x,y,...z) =>{
//     console.log(x,y,z);
//     var all = [x,y,...z];
//     console.log(all)
// }


var obj = {
    name:'memo',
    age:26
}

var {name,age} = obj;

console.log({name,age});