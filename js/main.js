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
	
	$('.select__list').click(function(){
		$(this).find('.select__option').slideToggle(300);
 	});
	$('.select__item--option').click(function(){

		$(this).siblings().removeClass('active');
		$(this).addClass('active');

 		var selectedProductPrice = $(this).find('.select__value--option span').text(),
		selectedProductParam = $(this).find('.select__param--option').text();
 		productPrice = $(this).closest('.select__list').find('.selected span').text(selectedProductPrice),
 		selectedPrice = $(this).closest('.select__list').find('#price').text(),
		price = parseInt(selectedPrice.replace(/\D+/g,""));

		console.log(price);

 		$(this).closest('.select__list').find('.selected .select__param').text(selectedProductParam);
 		console.log($(this).closest('.cart-product__value').find('.cart-product__price span:first'));	
		$(this).closest('.row').find('.cart-product__price span:first').text(price.toLocaleString('ru'));
 	});
 

});