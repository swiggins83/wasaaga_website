var countdown;
var timeToHide = false;

setCountDown();

$('body').mousemove(function() {
    if (timeToHide) {
        clearTimeout(countdown);
        $('#logobar').slideDown();
        $('#navbar').stop().animate({
            'left': 0
        }, 350);
        setCountDown();
    }
});

function setCountDown() {
    countdown = setTimeout(function() {
        $('#logobar').slideUp();
        $('#navbar').animate({
            'left': -($('#navbar').width() + $('#navbar').outerWidth())
        }, 350);
        timeToHide = true;
    }, 4000);
}
