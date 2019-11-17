// The constructor function 
function newPerson(name, age, occupation) {
    this.name = name; 
    this.age = age; 
    this.occupation = occupation; 
}

// Creating a new object from your constructor function 
var person1 = new newPerson("Jason", 100, "web developer"); 
