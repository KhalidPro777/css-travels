/**
 * Function to book flights.
 * @param {string} origin - The origin airport code.
 * @param {string} destination - The destination airport code.
 * @param {string} date - The date of the flight.
 * @returns {string} A confirmation message with the details of the booked flight.
 */
function bookFlights(origin, destination, date) {
    if (!origin || !destination || !date) {
        throw new Error("Please provide valid origin, destination, and date.");
    }
    return `Flight booked from ${origin} to ${destination} on ${date}.`;
}
const origin = "JFK";
const destination = "LAX";
const date = "2022-12-31";
const confirmationMessage = bookFlights(origin, destination, date);
console.log(confirmationMessage);
const departureAirportInput = document.getElementById('departureAirport');
const arrivalAirportInput = document.getElementById('arrivalAirport');
const departureDateInput = document.getElementById('departureDate');
const arrivalDateInput = document.getElementById('arrivalDate');
const classSelect = document.getElementById('classSelect');
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', () => {
  const departureAirport = departureAirportInput.value;
  const arrivalAirport = arrivalAirportInput.value;
  const departureDate = departureDateInput.value;
  const arrivalDate = arrivalDateInput.value;
  const selectedClass = classSelect.value;
  // ...
});

class Animal {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  
    makeSound() {
      console.log("Generic animal sound");
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name, "Dog");
      this.breed = breed;
    }
  
    makeSound() {
      console.log("Woof! Woof!");
    }
  
    fetch() {
      console.log(`${this.name} is fetching the ball.`);
    }
  }
  
  class Cat extends Animal {
    constructor(name, color) {
      super(name, "Cat");
      this.color = color;
    }
  
    makeSound() {
      console.log("Meow!");
    }
  
    sleep() {
      console.log(`${this.name} is taking a catnap.`);
    }
  }
  
  const dog1 = new Dog("Buddy", "Golden Retriever");
  const cat1 = new Cat("Whiskers", "Tabby");
  
  dog1.makeSound();
  dog1.fetch();
  
  cat1.makeSound();
  cat1.sleep();
  