$(document).ready(function() {
	function windowSize(){
    	if ($(window).width() <= '768'){
        	$('.advantagesSlider').slick({
    		    infinite: true,
    		    slidesToShow: 1,
    		    slidesToScroll: 1,
    		    arrows: true
  		    });
  		    $('.mattressSlider').slick({
    		    infinite: true,
    		    slidesToShow: 1,
    		    slidesToScroll: 1,
    		    arrows: true
  		    });
    	} else {
    		$('.advantagesSlider').slick('unslick');
    		$('.mattressSlider').slick('unslick');
    	}


    }



	$(window).on('load resize',windowSize);
});