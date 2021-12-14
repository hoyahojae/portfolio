const boxes = document.querySelector('.container'),
    items = [boxes.querySelectorAll('.portfolio-slide'), boxes.querySelectorAll('.portfolio-list-item')],
    seconds = 4000;
let currentBox = 0,
    timer = setTimeout(changeClass, seconds);
    
function changeClass() {
    currentBox++;
    for(const item of items) {
        item.forEach(div => div.classList.remove('active'));
        item[currentBox % item.length].classList.add('active');
    }    
    timer = setTimeout(changeClass, seconds);
}

boxes.addEventListener('mouseenter', function() {
    clearTimeout(timer);
});
boxes.addEventListener('mouseleave', function() {
    timer = setTimeout(changeClass, seconds);
});

