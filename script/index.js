document.addEventListener("DOMContentLoaded", () => {
  var navBar = document.querySelector(".nav-bar");
  var menuItems = document.querySelector("#menuItems");
  var aboutusbtn = document.querySelector("#about-us-btn");
  var overlay = document.querySelector("#overlay");
  const lines = document.querySelectorAll('.line1, .line2, .line3');

  // Add the "active" class to overlay and menuItems initially
  navBar.style.display = "none";

  if (window.innerWidth <= 768) {
    overlay.classList.add("overlay")
    navBar.style.display = "inline-block";
  }

  navBar.addEventListener("click", toggleMenuVisibility);

  function toggleMenuVisibility() {
    overlay.classList.toggle('active');
    menuItems.classList.toggle('active');
    lines[0].classList.toggle('cross1');
    lines[1].classList.toggle('cross2');
    lines[2].classList.toggle('hidden');
  }
});
