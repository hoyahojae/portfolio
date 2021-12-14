// MENU DROPDOWN
document.querySelector('#menu_berger').addEventListener('click', function() {
  document.querySelector('#menu_berger').classList.toggle('active')
  document.querySelector('#menu_active').classList.toggle('active')
});

// COPYRIGHT YEARS
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();