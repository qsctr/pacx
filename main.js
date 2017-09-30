addEventListener('load', function () {
    document.body.classList.add('loaded');
});

Array.prototype.slice.call(document.querySelectorAll('.feature-circle')).forEach(function (circle) {
    circle.addEventListener('mouseenter', function () {
        circle.classList.remove('mdc-elevation--z2');
        circle.classList.add('mdc-elevation--z8');
    });
    circle.addEventListener('mouseleave', function () {
        circle.classList.remove('mdc-elevation--z8');
        circle.classList.add('mdc-elevation--z2');
    });
    circle.addEventListener('click', function () {
        circle.classList.add('expanded');
    });
});
