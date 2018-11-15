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
			$('body,html').animate({scrollTop:0},100);
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
 		


	$("#callMeForm").submit(function() {
  		var form_data = $(this).serialize();
		$.ajax({
		    type: "POST",
		    url: "verify_captcha.php",
		    data: form_data,
		    success: function(data) {
		    console.log(data);
		        var result = data;
			    var check = 'Подтвердите, что Вы не являетесь роботом!';
		        if (result != check){
		           	send();
		        } else {
		           	alert(result);
		        }
		    },
		  	error: function(e) {
		    	console.log('test');
		      	alert('Введите капчу')
		  }
		});
		function send(){
		    $.ajax({
		        type: "POST",
		        url: "send.php",
		        data: form_data,
		        success: function(data) {
		        	console.log('test');
		            alert("Ваша заявка на звонок отправлена!");
		        },
		      	error: function(e) {
		          	console.log('test');
		      	}
		    });
		}
    });
    $(".mattressForm").submit(function() {
	 	var form_data = $(this).serialize();
		$.ajax({
		    type: "POST",
		    url: "verify_captcha.php",
		    data: form_data,
		    success: function(data) {
		    console.log(data);
		        var result = data;
			    var check = 'Подтвердите, что Вы не являетесь роботом!';
		        if (result != check){
		           	send();
		        } else {
		           	alert(result);
		        }
		    },
		  	error: function(e) {
		    	console.log('test');
		      	alert('Введите капчу')
		  }
		});
		function send(){
		    $.ajax({
		        type: "POST",
		        url: "orderMattress.php",
		        data: form_data,
		        success: function(data) {
		        	console.log('test');
		            alert("Ваша заявка на заказ отправлена!");
		        },
		      	error: function(e) {
		          	console.log('test');
		      	}
		    });
		}
    });
    $("#callMeFormWithoutEmail").submit(function() {
		var form_data = $(this).serialize();
		$.ajax({
		    type: "POST",
		    url: "verify_captcha.php",
		    data: form_data,
		    success: function(data) {
		    console.log(data);
		        var result = data;
			    var check = 'Подтвердите, что Вы не являетесь роботом!';
		        if (result != check){
		           	send();
		        } else {
		           	alert(result);
		        }
		    },
		  	error: function(e) {
		    	console.log('test');
		      	alert('Введите капчу')
		  }
		});
		function send(){
		    $.ajax({
		        type: "POST",
		        url: "callOrder.php",
		        data: form_data,
		        success: function(data) {
		        	console.log('test');
		            alert("Ваша заявка на звонок отправлена!");
		        },
		      	error: function(e) {
		          	console.log('test');
		      	}
		    });
		}
    });
    $("#partnerForm").submit(function() {
  		var form_data = $(this).serialize();
		$.ajax({
		    type: "POST",
		    url: "verify_captcha.php",
		    data: form_data,
		    success: function(data) {
		    console.log(data);
		        var result = data;
			    var check = 'Подтвердите, что Вы не являетесь роботом!';
		        if (result != check){
		           	send();
		        } else {
		           	alert(result);
		        }
		    },
		  	error: function(e) {
		    	console.log('test');
		      	alert('Введите капчу')
		  }
		});
		function send(){
		    $.ajax({
		        type: "POST",
		        url: "sendPartner.php",
		        data: form_data,
		        success: function(data) {
		        	console.log('test');
		            alert("Ваша заявка отпрвлена!");
		        },
		      	error: function(e) {
		          	console.log('test');
		      	}
		    });
		}
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



	ymaps.ready(init);

	//заводим координаты дилеров с описанием в массив
	var placemarks = [
		{
			lat : 56.952264,
			long : 53.319917,
			balloonContent: '<strong>Страна Снов</strong><br>Завьяловский р-н, д.Ягул, ул.Заречная, 41<br>Тел.: +7 (999) 227-87-36',
			preset: 'islands#icon',
		},
		{
			lat : 56.874257,
			long : 53.223743,
			balloonContent: '<strong>ТД "Электротехника в быту"</strong><br>г. Ижевск, ул. Холмогорова, 70 (левый вход)<br>Тел.: (3412) 31-09-06, 8-922-687-62-11',
			preset: 'islands#icon',
		},
		{
			lat : 56.866410,  
			long : 53.218838,
			balloonContent: '<strong>Склад</strong><br>г. Ижевск, ул. Коммунаров, 244 4 бокс<br>напротив автосалона "Русская ладья" ',
			preset: 'islands#icon',
		},
		{
			lat : 56.836840,
			long : 53.215991,
			balloonContent: '<strong>«ТЦ «Айсберг»</strong><br>г. Ижевск, ул. Пушкинская, 163а<br>Тел.: +7 (3412) 33-31-71, +7 (3412) 77-31-25',
			preset: 'islands#icon',
		},
		{
			lat : 56.847557,
			long : 53.290030,
			balloonContent: '<strong>Перекресток Ленина - Молодежная, за остановкой "Спортивная"</strong><br>г. Ижевск, ул. Молодежная, 74, (за остановкой)<br>Тел.: +7 (3412) 77-31-55, +7 (3412) 33-31-71',
			preset: 'islands#icon',
		},
		{
			lat : 57.042470,
			long : 54.016983,
			balloonContent: '<strong>Фабрика Русон</strong><br>г. Воткинск, ул. Казанская, 1 (ж/д вокзал)<br>Тел.: (34145) 5-12-10, 8-922-687-83-91',
			preset: 'islands#icon',
		},
		{
			lat : 58.005024,
			long : 56.157057,
			balloonContent: '<strong>Главатских Д.П.</strong><br>г. Пермь, ул. Трамвайная, 12, корпус 2<br>Тел.: +7 (982) 497-01-96',
			preset: 'islands#icon',
		},
	]



	var myMap, myAction, geoObjects= [];

	function init () {

	    //карта с дилерами
		myMap = new ymaps.Map ("map", {
	        center: [56.874257,53.223743],
	        zoom: 16,
	        duration: 50
	    });


		for (var i = 0; i < placemarks.length; i++) {
			geoObjects[i] = new ymaps.Placemark([placemarks[i].lat, placemarks[i].long], {
					balloonContent: placemarks[i].balloonContent,
				},
				{
					preset: placemarks[i].preset
				}
			);
		}

		var clusterer = new ymaps.Clusterer({ preset: 'islands#icon' });

		myMap.geoObjects.add(clusterer);
		//myMap.geoObjects.add(myPlacemark);
		clusterer.add(geoObjects);

	    myAction1 = new ymaps.map.action.Single({
	          center: [56.952264,53.319917],
	          zoom: 14,
	          duration: 1000
		});
	    myAction2 = new ymaps.map.action.Single({
	          center: [56.874257,53.223743],
	          zoom: 16,
	          duration: 1000
		});
		myAction3 = new ymaps.map.action.Single({
			center: [56.866410, 53.218838],
			zoom: 16,
			duration: 1000
		});
		myAction4 = new ymaps.map.action.Single({
			center: [56.836840, 53.215991],
			zoom: 16,
			duration: 1000
		});
		myAction5 = new ymaps.map.action.Single({
			center: [56.847557,53.290030],
			zoom: 16,
			duration: 1000
		});
		myAction6 = new ymaps.map.action.Single({
			center: [57.042470,54.016983],
			zoom: 16,
			duration: 1000
		});
		myAction7 = new ymaps.map.action.Single({
			center: [58.005024,56.157057],
			zoom: 16,
			duration: 1000
		});

		$("#zarech").click(function(){
		myMap.action.execute(myAction1);
		});
		$("#izhevsk, #holm").click(function(){
			myMap.action.execute(myAction2);
		});
		$("#kommun").click(function(){
			myMap.action.execute(myAction3);
		});
		$("#pushk").click(function(){
			myMap.action.execute(myAction4);
		});
		$("#molodezh").click(function(){
			myMap.action.execute(myAction5);
		});
		$("#votk").click(function(){
			myMap.action.execute(myAction6);
		});
		$("#perm").click(function(){
			myMap.action.execute(myAction7);
		});

	}

});
