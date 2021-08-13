//   TO TOP BUTTON 

document.addEventListener('DOMContentLoaded', function() {
    scrollFunction();
  })
  
  document.getElementById("scrollButton").onclick = goToTop;
  
  window.onscroll = function() {
    "use strict";
    scrollFunction();
  };
  
  function scrollFunction() {
    "use strict";
    if ((document.body.scrollTop > 20) || (document.documentElement.scrollTop > 20)) {
      document.getElementById("scrollButton").style.display = "block";
    } else {
      document.getElementById("scrollButton").style.display = "none";
    }
  }
  
  function goToTop() {
    "use strict";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  