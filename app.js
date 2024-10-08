document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.getElementById("hamburger");

  hamburger.addEventListener("click", function () {
    var headerItems = document.querySelector(".menu-items");

    // Toggle the 'menu-active' class on header_items
    headerItems.classList.toggle("menu-active");

    // Toggle the 'active' class for the hamburger icon animation
    hamburger.classList.toggle("active");
  });
});

window.addEventListener("scroll", function () {
  var headerContainer = document.querySelector(".header");

  if (window.scrollY > 100) {
    headerContainer.classList.add("scrolled");
  } else {
    headerContainer.classList.remove("scrolled");
  }
});
