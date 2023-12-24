class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  };
};

class Apartment {
  constructor() {
    this.residents = [];
  };

  addResident(person) {
    this.residents.push(person);
  };
};

class House {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  };

  addApartment(apartment) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
      console.log("Apartment added successfully.");
    } else {
      console.log("Cannot add more apartments. Maximum reached.");
    };
  };
};

const person1 = new Person("John", "Male");
const person2 = new Person("Alice", "Female");

const apartment1 = new Apartment();
const apartment2 = new Apartment();

apartment1.addResident(person1);
apartment2.addResident(person2);
console.log(person1);
console.log(person2);

const house = new House(2);
console.log(house);

house.addApartment(apartment1);
house.addApartment(apartment2);
console.log(apartment1);
console.log(apartment2);

const apartment3 = new Apartment();
house.addApartment(apartment3);
console.log(apartment3);
