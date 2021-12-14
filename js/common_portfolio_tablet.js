// IMG CLICK
document.querySelector('.pf-title-img>img').addEventListener('click', function() {
  document.querySelector('#pf_hover').classList.add('active')
});

document.querySelector('#pf_hover').addEventListener('click', function() {
  document.querySelector('#pf_hover').classList.remove('active')
});