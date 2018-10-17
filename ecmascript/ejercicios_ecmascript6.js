

var circles = [{
    name:'Circle 1',
    radio: 30
},
{
    name:'Circle 2',
    radio: 12
},
{
    name:'Circle 3',
    radio: 4.5
},
{
    name:'Circle 4',
    radio:12.3

}]



const PI = 3.1416;

// circles.forEach((circle) => console.log('El area del ' + circle.name + 'es : ' + PI*(circle.radio ** 2)));

const format = (nombre,radio) =>{
    let area = PI * radio**2;
    return `El area de ${nombre} es ${area}`
}

circles.forEach((circle) =>
console.log(format(circle.name,circle.radio)));