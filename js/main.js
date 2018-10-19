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

	$(function() {	 
		$(window).scroll(function() {	 
			if($(this).scrollTop() != 0) {	 
				$('#toTop').fadeIn();	 
			} else {	 
				$('#toTop').fadeOut();	 
			}	 
		});	 
		$('#toTop').click(function() {	 
			$('body,html').animate({scrollTop:0},800);	 
		});	 
	});

	$('#toggle').click(function() {
		if($('#headerContent').css('display') == "block"){
			$('#headerContent').css("display", 'none');
		} else {
			$('#headerContent').css("display", 'block');
			$('#headerContent').css("transition", 'all .9s ease');
		}
	});

 

});