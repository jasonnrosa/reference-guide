// Creates a sample array which can be replaced with your own array
let testArray = [1, 2, 3, 4, 5]; 

// Function that gets a random item from that array
function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

// Calling the function with the argument for the function being your array variable's name 
randomValueFromArray(testArray); 
