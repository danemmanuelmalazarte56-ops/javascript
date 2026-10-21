class Vehicle{
    constructor(name, days) {
        this.name = name;
        this.days = days;
    }

    calculateRental() {
        console.log(`${this.name} rental: `);
        return 0;
    }
}

class Car extends Vehicle {
    calculateRental() {
        const rental = 1500 * this.days;
        console.log(`${this.name} rental: ${rental}`);
        return rental;
    }
}

class Motorcycle extends Vehicle {
    calculateRental() {
        const rental = 500 * this.days;
        console.log(`${this.name} rental: ${rental}`);
        return rental;
    }
}

const car = new Car("Sedan", 3);
const motorcycle = new Motorcycle("Scooter", 3);

const vehicles = [car, motorcycle];

for (const vehicle of vehicles) {
    vehicle.calculateRental();
}