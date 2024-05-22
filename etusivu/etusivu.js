
const slider = document.querySelector('.slider');
const navigaatio = document.querySelector('.navigaatio');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
   
var direction = 1;

prev.addEventListener('click', function() {
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
        direction = 1;
    }
    navigaatio.style.justifyContent = 'flex-end';
    slider.style.transform = 'translate(14.28%)';
});

next.addEventListener('click', function() {
    direction = -1;
    navigaatio.style.justifyContent = 'flex-start';
    slider.style.transform = 'translate(-14.28%)';
});

slider.addEventListener('transitionend', function() {
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
    } else if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(function(){
        slider.style.transition = 'all 0.5s';
    });
});