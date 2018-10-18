$(document).ready(function() {
	function windowSize(){
    	if ($(window).width() <= '768'){
        	$('.advantagesSlider').slick({
    		    infinite: true,
    		    slidesToShow: 1,
    		    slidesToScroll: 1,
    		    prevArrow: '.prev2',
        		nextArrow: '.next2'
  		    });
  		    $('.mattressSlider').slick({
    		    infinite: true,
    		    slidesToShow: 1,
    		    slidesToScroll: 1,
    		    prevArrow: '.prev',
        		nextArrow: '.next'
  		    });
    	} else {
    		$('.advantagesSlider').slick('unslick');
    		$('.mattressSlider').slick('unslick');
    	}


    }



	$(window).on('load resize',windowSize);
});