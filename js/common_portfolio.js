// ScrollMagic.js
const spyEls = document.querySelectorAll('.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .9
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

// TOP BUTTON
const toTopEl = document.querySelector('#to-top');

toTopEl.addEventListener('click', function () {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(window, .7, {
    scrollTo: 0
  });
});