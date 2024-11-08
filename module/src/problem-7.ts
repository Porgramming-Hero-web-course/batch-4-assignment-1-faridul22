class Car {

    constructor(public make: string, public model: string, public year: number) {

    }

    getCarAge(): number {
        const currentYear: number = new Date().getFullYear();
        const carsAge: number = currentYear - this.year;
        return carsAge
    }
}

// Sample Input 1:
const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());
