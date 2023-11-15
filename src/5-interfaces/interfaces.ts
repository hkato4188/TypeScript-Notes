//interface is defined with a capital letter
interface Vehicle {
    name: string;
    // year: number;
    year: Date;
    broken: boolean;
    summary(): string;
}

//long type annotations:
//const printVehicle = (vehicle: {name: string; year: number; broken: boolean}) : void => {
const printVehicle = (vehicle: Vehicle) : void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Year: ${vehicle.year}`)
    console.log(`Broken: ${vehicle.broken}`)
    console.log(`Summary: ${vehicle.summary()}`)
}

const truck = {
    name: "fordy",
    year: new Date(),
    broken: false,
    color: 'brown',
    gas: true,
    mpg: 100,
    summary(): string{
        return `This truck is the color: ${this.color}`;
    }
}

const oldCivic = {
    name: "civic",
    // year: 2000,
    year: new Date(),
    broken: true,
    //isBroken: true
    summary(): string {
        return  `Name: ${this.name}`
    }
};



printVehicle(oldCivic)
printVehicle(truck)