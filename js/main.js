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
		//$('.header-content').fadeOut().fadeIn();
		$('#toggle').toggleClass('on');
		if($('#toggle').hasClass('on')){
			$('#headerContent').stop().fadeOut(50);
		} else {
			$('#headerContent').fadeIn(2000);
		}
	})

	
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

////// 

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

	// Инициализация и уничтожение карты при нажатии на кнопку.

	ymaps.ready(init);
	
	//заводим координаты дилеров с описанием в массив
	var placemarks = [
		{
			lat : 56.952264,
			long : 53.319917,
			balloonContent: '<strong>Страна Снов</strong><br>Завьяловский р-н, д.Ягул, ул.Заречная, 41<br>Тел.: +7 (999) 227-87-36',
			preset: 'islands#redDotIcon',
		},
		{
			lat : 56.874257,
			long : 53.223743,
			balloonContent: '<strong>ТД "Электротехника в быту"</strong><br>г. Ижевск, ул. Холмогорова, 70 (левый вход)<br>Тел.: (3412) 31-09-06, 8-922-687-62-11',
			preset: 'islands#redDotIcon',
		},
		{
			lat : 56.863124,
			long : 53.221300,
			balloonContent: '<strong>ТВЦ «Кировский» паркинг (Строй Порт)</strong><br>г. Ижевск, ул. Кирова, 146 "А"<br>Тел.: 8-912-857-09-39, 8-922-687-62-10, 8-922-517-06-07',
			preset: 'islands#redDotIcon',
		},
		{
			lat : 56.836840,
			long : 53.215991,
			balloonContent: '<strong>«ТЦ «Айсберг»</strong><br>г. Ижевск, ул. Пушкинская, 163а<br>Тел.: +7 (3412) 33-31-71, +7 (3412) 77-31-25',
			preset: 'islands#redDotIcon',
		},
		{
			lat : 56.869077,
			long : 53.278055,
			balloonContent: '<strong>ТРК "Италмас"</strong><br>г. Ижевск, ул. Автозаводская, 2а (возле входа в МАГНИТ)<br>Тел.: 8 (982) 124-77-82, 8 (3412) 65-55-83',
			preset: 'islands#redDotIcon',
		},
		{
			lat : 56.847557,
			long : 53.290030,
			balloonContent: '<strong>Перекресток Ленина - Молодежная, за остановкой "Спортивная"</strong><br>г. Ижевск, ул. Молодежная, 74, (за остановкой)<br>Тел.: +7 (3412) 77-31-55, +7 (3412) 33-31-71',
			preset: 'islands#redDotIcon',
		},
		{
			lat : 57.042470,
			long : 54.016983,
			balloonContent: '<strong>Фабрика Русон</strong><br>г. Воткинск, ул. Казанская, 1 (ж/д вокзал)<br>Тел.: (34145) 5-12-10, 8-922-687-83-91',
			preset: 'islands#redDotIcon',
		},
		{
			lat : 56.465922,
			long : 53.807127,
			balloonContent: '<strong>Виктория Мебель</strong><br>г. Сарапул, ул. Пролетарская, 31, 2	этаж<br>Тел.: +7 (912) 465-15-40',
			preset: 'islands#redDotIcon',
		},
		{
			lat : 58.005024,
			long : 56.157057,
			balloonContent: '<strong>Главатских Д.П.</strong><br>г. Пермь, ул. Трамвайная, 12, корпус 2<br>Тел.: +7 (982) 497-01-96',
			preset: 'islands#redDotIcon',
		},
		{
			lat : 56.442016,
			long : 52.214270,
			balloonContent: '<strong>ТЦ «Ермак»,</strong><br>г. Можга, ул. Наговицына, 82, 2 этаж<br>Тел.: (34139) 3-09-06, 8-922-50-02-111',
			preset: 'islands#redDotIcon',
		},
	]
	
	var myMap, myAction, geoObjects= [];


	function init () {

	    //карта с дилерами
		myMap = new ymaps.Map ("map", {
	        center: [56.952264,53.319917],
	        zoom: 14,
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

		var clusterer = new ymaps.Clusterer({
			preset: 'islands#redClusterIcons',
		});
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
			center: [56.863124, 53.221300],
			zoom: 16,
			duration: 1000
		  });
		myAction4 = new ymaps.map.action.Single({
			center: [56.836840, 53.215991],
			zoom: 16,
			duration: 1000
		  });
		myAction5 = new ymaps.map.action.Single({
			center: [56.869077,53.278055],
			zoom: 16,
			duration: 1000
		  });
		myAction6 = new ymaps.map.action.Single({
			center: [56.847557,53.290030],
			zoom: 16,
			duration: 1000
		  });
		myAction7 = new ymaps.map.action.Single({
			center: [57.042470,54.016983],
			zoom: 16,
			duration: 1000
		  });
		myAction8 = new ymaps.map.action.Single({
			center: [56.465922,53.807127],
			zoom: 16,
			duration: 1000
		  });
		myAction9 = new ymaps.map.action.Single({
			center: [58.005024,56.157057],
			zoom: 16,
			duration: 1000
		  });
		myAction10 = new ymaps.map.action.Single({
			center: [56.442016,52.214270],
			zoom: 16,
			duration: 1000
	  	}); 
	}

	$("#izhevsk, [data-class=zarech]").click(function(){
		myMap.action.execute(myAction1);
	});
	$("[data-class=holm_70]").click(function(){
		myMap.action.execute(myAction2);
	});
	$("[data-class=kir_146]").click(function(){
		myMap.action.execute(myAction3);
	});
	$("[data-class=pushk_163a]").click(function(){
		myMap.action.execute(myAction4);
	});
	$("[data-class=avt_2a]").click(function(){
		myMap.action.execute(myAction5);
	});
	$("[data-class=molod_74]").click(function(){
		myMap.action.execute(myAction6);
	});
	$("#votkinsk").click(function(){
		myMap.action.execute(myAction7);
	});
	$("#sarapul").click(function(){
		myMap.action.execute(myAction8);
	});
	$("#perm").click(function(){
		myMap.action.execute(myAction9);
	});
	$("#mozhga").click(function(){
		myMap.action.execute(myAction10);
	});



});