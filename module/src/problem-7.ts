{
    //

    class Car {

        constructor(public make: string, public model: string, public year: number) {

        }

        getCarAge(): number {
            const currentYear: number = new Date().getFullYear();
            const carsAge: number = currentYear - this.year;
            return carsAge
        }
    }


    // 
}