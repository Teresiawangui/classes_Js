class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = true; // Initially set to true
    }

    toggleAvailability() {
        this.isAvailable = !this.isAvailable;
    }
}
class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
      this.car = car;
      this.renterName = renterName;
      this.rentalStartDate = new Date(rentalStartDate); 
      this.rentalEndDate = new Date(rentalEndDate);
    }
  
    calculateRentalDuration() {
      const start = this.rentalStartDate;
      const end = this.rentalEndDate;
      const timeDifference = Math.abs(end - start); 
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      return daysDifference;
    }
  }
  
  
    
  // Create an instance of the Car class for a car in the inventory
  const myCar = new Car('Toyota', 'Camry', 2021);
  
  // Create an instance of the Rental class involving the car created
  const rentalInfo = new Rental(myCar, '2022-01-01', '2022-01-10');
  
  // Calculate the rental duration using the calculateRentalDuration method
  const rentalDuration = rentalInfo.calculateRentalDuration();
  console.log(rentalDuration);

  

 
  
