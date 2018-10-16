$(document).ready(function() {
	function windowSize(){
    	if ($(window).width() <= '995'){
        	$('.advantagesSlider').slick({
    		    infinite: true,
    		    slidesToShow: 1,
    		    slidesToScroll: 1,
    		    arrows: true
  		    });
    	} else {
    		$('.advantagesSlider').slick('unslick');
    	}
    }
	$(window).on('load resize',windowSize);
});