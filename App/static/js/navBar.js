// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Check if the user is on a mobile device
  if (isMobileDevice()) {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
  }
});

function isMobileDevice() {
  return window.innerWidth <= 600; // Adjust this threshold as needed
}

function handleScroll() {
  var header = document.querySelector("nav");

  // If the user is scrolling down, hide the header; if scrolling up, show the header
  if (window.scrollY > this.lastScroll) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  // Update last scroll position
  this.lastScroll = window.scrollY;
}
