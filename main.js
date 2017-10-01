var home = document.querySelector('#home');
var about = document.querySelector('#about');

addEventListener('load', function () {
    if (localStorage.getItem('asdf') === null) {
        localStorage.setItem('asdf', 'asdf');
        location.reload();
    }
    document.body.classList.add('loaded');
});

var currentDetail = document.querySelector('#feature-detail');
var currentCircle;

Array.prototype.slice.call(document.querySelectorAll('.feature-circle')).forEach(function (circle) {
    circle.addEventListener('mouseenter', function () {
        if (circle !== currentCircle) {
            circle.classList.remove('mdc-elevation--z2');
            circle.classList.add('mdc-elevation--z8');
        }
    });
    circle.addEventListener('mouseleave', function () {
        if (circle !== currentCircle) {
            circle.classList.remove('mdc-elevation--z8');
            circle.classList.add('mdc-elevation--z2');
        }
    });
    circle.addEventListener('click', function () {
        if (currentCircle) {
            console.log(currentCircle);
            currentCircle.classList.remove('mdc-elevation--z8');
        }
        currentCircle = circle;
        circle.classList.add('mdc-elevation--z8');
        currentDetail.classList.add('hidden');
        var prevDetail = currentDetail;
        currentDetail = document.querySelector('#' + circle.id + '-detail');
        setTimeout(function () {
            prevDetail.style.display = 'none';
            currentDetail.style.display = 'block';
            currentDetail.offsetHeight;
            currentDetail.classList.remove('hidden');
        }, 500);
    });
});
