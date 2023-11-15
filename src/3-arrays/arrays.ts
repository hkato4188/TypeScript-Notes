const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

// Inference when extracting values
const car = carMakers[0]
const myCar = carsByMake.pop()

//prevent incompatible values
// carMakers.push(100) => error

// Autocomplete help with 'map'
carMakers.map((car: string): void => {
    console.log(car.toUpperCase())
});

//Flexible types override type inference to specify typing
//Avoid any type
const importantDates: (Date | string)[] = ['2030-10-10'];
importantDates.push(new Date())

