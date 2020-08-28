var counter = 0;
$('html').mouseleave(function () {
		if (counter < 4) {
			$('.popup').fadeIn();
			console.log(counter);
		}
    });
$('.close').click(function () {
	counter++;
    $('.popup').fadeOut();
});

