var exampleString = "Hello there my name is Jason";

// Method 1: uses index of to detect where in the string the value is (if there is no match it returns a value of -1)
exampleString.indexOf("Jason"); 

// Method 2: uses an ES6 includes method to return a true or false value if a string contains a certain value
exampleString.includes("Jason"); 

// Method 3: uses a Regex search to detect where in teh string the value is (if there is no match it returns a value of -1)
exampleString.search(/Jason/);

// Method 4:uses Regex test to return a true or false value if a string contains a certain value
/Jason/.test(exampleString)

// Method 5: uses Regex match to return an array if a string contains a certain value (if there is no match it returns a value of null)
exampleString.match(/Jason/);
