$(document).ready(function() {

	$('.advantagesSlider').slick({
		infinite: true,
    	slidesToShow: 12,
      	slidesToScroll: 1,
      	arrows: true,
   //   	prevArrow: '<img src="img/left_blue.png">',
	 	// nextArrow: '<img src="img/right_blue.png">',
	 	prevArrow: $('.prev'),
	 	nextArrow: $('.next'),
     	responsive: [
	    	{
	      		breakpoint: 924,
	      		settings: {
							centerMode: false,
							arrows: true,
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: true,
						}
	    			}] 
	});



});