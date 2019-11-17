// Standard Scroll Top
function scrollTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// Animated Scroll Top
function animatedScrollTop(scrollDuration) {
  var scrollStep = -window.scrollY / (scrollDuration / 15);
  var scrollInterval = setInterval(function(){
    if (window.scrollY != 0) {
      window.scrollBy(0, scrollStep);
    }
    else { 
      clearInterval(scrollInterval);
    }
  },15);
};

// Animated Scroll Top With Ease In and Ease Out
function animatedSmoothScrollTop(scrollDuration) {
  var scrollHeight = window.scrollY
  var scrollStep = Math.PI / (scrollDuration / 15);
  var cosParameter = scrollHeight / 2;
  var scrollCount = 0;
  var scrollMargin;
  var scrollInterval = setInterval(function() {
    if (window.scrollY !=) {
      scrollCount = scrollCount + 1;  
      scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
      window.scrollTo(0,(scrollHeight - scrollMargin));
    } 
    else { 
      clearInterval(scrollInterval); 
    }
  }, 15 );
};
