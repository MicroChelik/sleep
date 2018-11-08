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

	$('#toggle').click(function () {
		$('#toggle').toggleClass('on');
		if($('#toggle').hasClass('on')){
			$('#headerContent').stop().fadeOut(50);
		} else {
			$('#headerContent').fadeIn(2000);
		}
	})


	$('.products__button--click').click(function(){
		mattress = $(this).closest('.card').find('.mattressTitle').text();
		console.log(mattress);
		$('.callmeback-form--order #mattress').val(mattress);
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


 		$(this).closest('.select__list').find('.selected .select__param').text(selectedProductParam);
		$(this).closest('.row').find('.cart-product__price span:first').text(price.toLocaleString('ru'));
		$('.callmeback-form--order #product_size').val(selectedProductParam);
		$('.callmeback-form--order #product_price').val(price.toLocaleString('ru'));
 	});

//////
	$("#callMeForm").submit(function() {
            var form_data = $(this).serialize();
            $.ajax({
	            type: "POST",
	            url: "send.php",
	            data: form_data,
	            success: function() {
	                   alert("Ваше сообщение отпрвлено!");
	            }
	        });
    });
    $(".mattressForm").submit(function() {
            var form_data = $(this).serialize();
            $.ajax({
	            type: "POST",
	            url: "orderMattress.php",
	            data: form_data,
	            success: function() {
	                   alert("Ваша заявка на заказ отправлена!");
	            }
	        });
    });
    $("#callMeFormWithoutEmail").submit(function() {
            var form_data = $(this).serialize();
            $.ajax({
	            type: "POST",
	            url: "callOrder.php",
	            data: form_data,
	            success: function() {
	                   alert("Ваше сообщение отпрвлено!");
	            }
	        });
    });
    $("#partnerForm").submit(function() {
            var form_data = $(this).serialize();
            $.ajax({
	            type: "POST",
	            url: "sendPartner.php",
	            data: form_data,
	            success: function() {
	                   alert("Ваша заявка отпрвлена!");
	            }
	        });
    });

//map
	var addressList = $('.address__list'),
		cityList = $('.city__list'),
		citySelect = $('.city__select'),
		cityItem = $('.city__item')
		addressItem = $('.address__item'),
		contactsList = $('.contacts__list');
	//Показываем список городов
	citySelect.click(function() {
		cityList.slideToggle(300);
	});

	cityItem.click(function() {
		var city = $(this).attr('id')

		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		cityList.fadeOut(300);
		citySelect.text($(this).text());
		addressItem.removeClass('active');

		addressList.removeClass('active')
					.filter('.address__list--' + city)
					.addClass('active')
					.find(addressItem).first()
					.addClass('active');

		var addressItemFirst = addressList.filter('.address__list--' + city)
										.find(addressItem)
										.first()
										.data('class');

		contactsList.removeClass('active')
					.filter('.contacts__list--' + addressItemFirst)
					.addClass('active');
	});

	addressItem.click(function(){
		var itemPosition = $(this).data('class');

		$(this).siblings().removeClass('active');
		$(this).addClass('active');

		contactsList.removeClass('active')
					.filter('.contacts__list--' + itemPosition)
					.addClass('active');
	});


	var myMap;

	ymaps.ready(init);

	function init () {

	    myMap = new ymaps.Map('map', {
          center: [56.874257,53.223743],
	        zoom: 16,
    	}, {
        	searchControlProvider: 'yandex#search'
    	}),

    	// myMap.controls.add('smallZoomControl');



    	myMap.geoObjects
    	.add(new ymaps.Placemark([56.874257,53.2237431], {
            balloonContent: ''
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }));



    	document.getElementById('holm').onclick = function () {
	    	myMap.destroy();
	    	myMap = new ymaps.Map('map', {
		       center: [56.874257,53.223743],
				zoom: 16,
			    duration: 1000
	    	}, {
	        	searchControlProvider: 'yandex#search'
	    	}),

	    	myMap.geoObjects
	    	.add(new ymaps.Placemark([56.874257,53.223743], {
	            balloonContent: ''
	        }, {
	            preset: 'islands#icon',
	            iconColor: '#0095b6'
	        }))
	    };

        document.getElementById('kirova').onclick = function () {
	    	myMap.destroy();
	    	myMap = new ymaps.Map('map', {
		       center: [56.863124, 53.221300],
				zoom: 16,
			    duration: 1000
	    	}, {
	        	searchControlProvider: 'yandex#search'
	    	}),

	    	myMap.geoObjects
	    	.add(new ymaps.Placemark([56.863124, 53.221300], {
	            balloonContent: ''
	        }, {
	            preset: 'islands#icon',
	            iconColor: '#0095b6'
	        }))
	    };

	    document.getElementById('pushk').onclick = function () {
	    	myMap.destroy();
	    	myMap = new ymaps.Map('map', {
		       center: [56.836840, 53.215991],
				zoom: 16,
			    duration: 1000
	    	}, {
	        	searchControlProvider: 'yandex#search'
	    	}),

	    	myMap.geoObjects
	    	.add(new ymaps.Placemark([56.836840, 53.215991], {
	            balloonContent: ''
	        }, {
	            preset: 'islands#icon',
	            iconColor: '#0095b6'
	        }))
	    };

	    document.getElementById('molodezh').onclick = function () {
	    	myMap.destroy();
	    	myMap = new ymaps.Map('map', {
		       center: [56.847557,53.290030],
				zoom: 16,
			    duration: 1000
	    	}, {
	        	searchControlProvider: 'yandex#search'
	    	}),

	    	myMap.geoObjects
	    	.add(new ymaps.Placemark([56.847557,53.290030], {
	            balloonContent: ''
	        }, {
	            preset: 'islands#icon',
	            iconColor: '#0095b6'
	        }))
	    };

	    document.getElementById('zarech').onclick = function () {
	    	myMap.destroy();
	    	myMap = new ymaps.Map('map', {
		       center: [56.952264,53.319917],
				zoom: 16,
			    duration: 1000
	    	}, {
	        	searchControlProvider: 'yandex#search'
	    	}),

	    	myMap.geoObjects
	    	.add(new ymaps.Placemark([56.952264,53.319917], {
	            balloonContent: ''
	        }, {
	            preset: 'islands#icon',
	            iconColor: '#0095b6'
	        }))
	    };

	    document.getElementById('izhevsk').onclick = function () {
	    	myMap.destroy();
	    	myMap = new ymaps.Map('map', {
		       center: [56.874257,53.223743],
				zoom: 16,
			    duration: 1000
	    	}, {
	        	searchControlProvider: 'yandex#search'
	    	}),

	    	myMap.geoObjects
	    	.add(new ymaps.Placemark([56.874257,53.223743], {
	            balloonContent: ''
	        }, {
	            preset: 'islands#icon',
	            iconColor: '#0095b6'
	        }))
	    };


	    document.getElementById('votk').onclick = function () {
	    	myMap.destroy();
	    	myMap = new ymaps.Map('map', {
		       center: [57.042470,54.016983],
				zoom: 16,
			    duration: 1000
	    	}, {
	        	searchControlProvider: 'yandex#search'
	    	}),

	    	myMap.geoObjects
	    	.add(new ymaps.Placemark([57.042470,54.016983], {
	            balloonContent: ''
	        }, {
	            preset: 'islands#icon',
	            iconColor: '#0095b6'
	        }))
	    };

	    document.getElementById('perm').onclick = function () {
	    	myMap.destroy();
	    	myMap = new ymaps.Map('map', {
		       center: [58.005024,56.157057],
				zoom: 16,
			    duration: 1000
	    	}, {
	        	searchControlProvider: 'yandex#search'
	    	}),

	    	myMap.geoObjects
	    	.add(new ymaps.Placemark([58.005024,56.157057], {
	            balloonContent: ''
	        }, {
	            preset: 'islands#icon',
	            iconColor: '#0095b6'
	        }))
	    };

	};


});
