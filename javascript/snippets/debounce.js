// Add your function here
function exampleFunction() {
};

// Add the debounce function 
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// Use the debounce function when invoking your custom function in taxing event listeners such as scroll and resize to reduce the amount of work the browser has to do
// Debounce takes in three params: function to debounce, time to wait, and if it should debounce immediately
window.addEventListener('scroll', debounce(exampleFunction, 30, true));
