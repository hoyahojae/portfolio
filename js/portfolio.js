// 동대문엽기떡볶이 ACTIVE
document.querySelector('#yubdduk').addEventListener('mouseover', function() {
  // BACKGROUND
  document.querySelector('#yubddukVideo').classList.add('active')
  document.querySelector('#jypeVideo').classList.remove('active')
  document.querySelector('#panasonicVideo').classList.remove('active')
  // ACTIVE
  document.querySelector('#yubdduk').classList.add('active')
  document.querySelector('#jype').classList.remove('active')
  document.querySelector('#panasonic').classList.remove('active')
});

// JYP엔터테인먼트 ACTIVE
document.querySelector('#jype').addEventListener('mouseover', function() {
  // BACKGROUND
  document.querySelector('#jypeVideo').classList.add('active')
  document.querySelector('#yubddukVideo').classList.remove('active')
  document.querySelector('#panasonicVideo').classList.remove('active')
  // ACTIVE
  document.querySelector('#jype').classList.add('active')
  document.querySelector('#yubdduk').classList.remove('active')
  document.querySelector('#panasonic').classList.remove('active')
});

// Panasonic ACTIVE
document.querySelector('#panasonic').addEventListener('mouseover', function() {
  // BACKGROUND
  document.querySelector('#panasonicVideo').classList.add('active')
  document.querySelector('#yubddukVideo').classList.remove('active')
  document.querySelector('#jypeVideo').classList.remove('active')
  // ACTIVE
  document.querySelector('#panasonic').classList.add('active')
  document.querySelector('#yubdduk').classList.remove('active')
  document.querySelector('#jype').classList.remove('active')
});

// 자동 활성화