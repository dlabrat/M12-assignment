// STEP 1
/*
class Cat {
    constructor(name) {
      this.name = name
    }
}
const Dog = class {
  constructor(name) {
    this.name = name
  }
}

// STEP 2
const myCat = new Cat("Mittens");
const myDog = new Dog("Buddy");

// STEP 3
class Animal {
    constructor() {

    }
    DidIt() {
        console.log("The Animal has been created")
    }    
}
const myAnimal = new Animal()
myAnimal.DidIt()
*/

// STEP 4
/*
class Animal {
    constructor(message) {
        this.message = message
    }
    SayIt() {
        console.log(this.message)
    }    
}
const myAnimal = new Animal("The animal has been created. ")
myAnimal.SayIt()
*/

// STEP 5
/*
class Animal {
    constructor(type, breed, color, height, length) {
      this.type = type
      this.breed = breed
      this.color = color
      this.height= height
      this.length = length 
    }
    displayProps() {
        console.log(`Animal: 
            Type: ${this.type} 
            Breed: ${this.breed}
            Color: ${this.color}
            Height: ${this.height} 
            Length: ${this.length}
            `)
    }
  }
const myAnimal = new Animal ("Reptile","Corn Snake", "Red", "1 inch", "3 feet")
myAnimal.displayProps()
*/

// STEP 6
/*
class Animal {
    constructor(type, breed, color, height, length) {
      this.type = type
      this.breed = breed
      this.color = color
      this.height= height
      this.length = length 
    }
  }
const myAnimal = new Animal ("Reptile","Corn Snake", "Red", "1 inch", "3 feet")
console.log("Animal properties: ")
for (const detail in myAnimal) {
    console.log(`${detail}: ${myAnimal[detail]}`)
}
*/ 

// STEP 7
/*
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type   
        this.breed = breed    
        this.color = color 
        this.height = height 
        this.length = length 
    }
    speak() {
        if (this.type.toLowerCase() === "dog") {
            return `The ${this.color} dog is barking.`;
        } else if (this.type.toLowerCase() === "cat") {
            return `The ${this.color} cat is meowing.`;
        } 
        else {
            //nothing happens 
        }
    }
}
const myDog = new Animal("Dog", "Labrador", "Golden", 60, 120)
const myCat = new Animal("Cat", "Siamese", "White", 30, 50)
console.log(myDog.speak()) 
console.log(myCat.speak()) 
*/

// STEP 8

// STEP 9