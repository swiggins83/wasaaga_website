var countdown;
var timeToHide = false;

setCountDown();

$('body').mousemove(function() {
    if (timeToHide) {
        clearTimeout(countdown);
        $('#navbar').stop().animate({
            'opacity': 0.90,
            'left': 0
        }, 350, 'easeInOutExpo', function() {
            setCountDown();
        }, 5000);
    }
});

function setCountDown() {
    countdown = setTimeout(function() {
        $('#navbar').animate({
            'opacity': 0,
            'left': -($('#navbar').width() + $('#navbar').outerWidth())
        }, 350, 'easeInOutExpo', function() {
            timeToHide = true;
        });
    }, 5000);
}
