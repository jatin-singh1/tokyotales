document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');
  
    // Toggle the menu when the hamburger icon is clicked
    hamburgerIcon.addEventListener('click', function () {
      menu.classList.toggle('show');
    });
  
    // Close the menu when a menu item is clicked
    const menuItems = document.querySelectorAll('.nav-link');
    menuItems.forEach(function (item) {
      item.addEventListener('click', function () {
        menu.classList.remove('show');
      });
    });
  
    // Close the menu when a dropdown link is clicked
    const dropdownLinks = document.querySelectorAll('.dropdown-link');
    dropdownLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('show');
      });
    });
  
    // Close the menu when clicking outside the menu
    document.addEventListener('click', function (event) {
      if (!menu.contains(event.target) && event.target !== hamburgerIcon) {
        menu.classList.remove('show');
      }
    });
  
    // Prevent the menu from closing when clicking inside the menu
    menu.addEventListener('click', function (event) {
      event.stopPropagation();
    });
  });
  