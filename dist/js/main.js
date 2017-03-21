(function ($) {

  // Chrome Smooth Scroll
  // try {
  //     $.browserSelector();
  //     if ($("html").hasClass("chrome")) {
  //         $.smoothScroll();
  //     }
  // } catch (err) {};

	$('input#season').focus(function(){
		$('.choose-season').show();
     }); // end blur()
	$('input#season').blur(function(){
		setTimeout(function(){
		  $('.choose-season').hide();
		}, 200);
     });

	$('input#brick').focus(function(){
		$('.choose-foundations-1').show();
     }); // end blur()
	$('input#brick').blur(function(){
		setTimeout(function(){
		  $('.choose-foundations-1').hide();
		}, 200);
     });

	$('input#brush').focus(function(){
		$('.choose-foundations-2').show();
     }); // end blur()
	$('input#brush').blur(function(){
		setTimeout(function(){
		  $('.choose-foundations-2').hide();
		}, 200);
     });

	$('input#foundation').focus(function(){
		$('.choose-foundations-3').show();
     }); // end blur()
	$('input#foundation').blur(function(){
		setTimeout(function(){
		  $('.choose-foundations-3').hide();
		}, 200);
     });          	



	$('#sizes-submit').click(function(){
		validate($('input#length, input#width'));

		var value = $('input#season').val(),
			length = $('input#length').val(),
			width = $('input#width').val();

	   if($('input#length').hasClass('not_error') &
	   		$('input#width').hasClass('not_error') & 
				$('input#season').hasClass('not_error')) {
       			$('.par-first').html("<span>Длина: <b>" + length + "</b></span><span>Ширина: <b>" + width + "</b></span> <span> Сезонность: <b>" + value + "</b></span>");
	   }			

		

              if(value != '')
              {
                 $('input#season').addClass('not_error');
                 $('input#season').next('.error-box').html('<div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>')
                                           .css('color','green')
                                           .animate({'paddingLeft':'10px'},400)
                                           .animate({'paddingLeft':'5px'},400);
              }
              else
              {
                 $('input#season').removeClass('not_error').addClass('error');
                 $('input#season').next('.error-box').html('<div class="err">Пожалуйста заполните это поле</div>')
                                           .css('color','#393939')
                                           .animate({'paddingLeft':'10px'},400)
                                           .animate({'paddingLeft':'5px'},400);
              }
	})

	$('#foundations-submit').click(function(){

		var valueBrick = $('input#brick').val();
		var valueBrush = $('input#brush').val();
		var valueFoundation = $('input#foundation').val();

	   if($('input#brick').hasClass('not_error') &
	   		$('input#brush').hasClass('not_error') & 
				$('input#foundation').hasClass('not_error')) {
       			$('.par-second').html("<span>Наружная отделка: <b>" + valueBrick + "</b></span><span>Внутренняя отделка: <b>" + valueBrush + "</b></span> <span> Фундамент: <b>" + valueFoundation + "</b></span>");
	   }			

              if(valueBrick != '')
              {
                 $('input#brick').addClass('not_error');
                 $('input#brick').next('.error-box').html('<div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>')
                                           .css('color','green')
                                           .animate({'paddingLeft':'10px'},400)
                                           .animate({'paddingLeft':'5px'},400);
              }
              else
              {
                 $('input#brick').removeClass('not_error').addClass('error');
                 $('input#brick').next('.error-box').html('<div class="err">Пожалуйста заполните это поле</div>')
                                           .css('color','#393939')
                                           .animate({'paddingLeft':'10px'},400)
                                           .animate({'paddingLeft':'5px'},400);
              }

              if(valueBrush != '')
              {
                 $('input#brush').addClass('not_error');
                 $('input#brush').next('.error-box').html('<div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>')
                                           .css('color','green')
                                           .animate({'paddingLeft':'10px'},400)
                                           .animate({'paddingLeft':'5px'},400);
              }
              else
              {
                 $('input#brush').removeClass('not_error').addClass('error');
                 $('input#brush').next('.error-box').html('<div class="err">Пожалуйста заполните это поле</div>')
                                           .css('color','#393939')
                                           .animate({'paddingLeft':'10px'},400)
                                           .animate({'paddingLeft':'5px'},400);
              }

              if(valueFoundation != '')
              {
                 $('input#foundation').addClass('not_error');
                 $('input#foundation').next('.error-box').html('<div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>')
                                           .css('color','green')
                                           .animate({'paddingLeft':'10px'},400)
                                           .animate({'paddingLeft':'5px'},400);
              }
              else
              {
                 $('input#foundation').removeClass('not_error').addClass('error');
                 $('input#foundation').next('.error-box').html('<div class="err">Пожалуйста заполните это поле</div>')
                                           .css('color','#393939')
                                           .animate({'paddingLeft':'10px'},400)
                                           .animate({'paddingLeft':'5px'},400);
              }     
	   if($('input#brick').hasClass('not_error') &
	   		$('input#brush').hasClass('not_error') & 
				$('input#foundation').hasClass('not_error')) {
       		$('#foundations-submit').attr('for', 'tab-nav-3');
	   }
	   else {
	   		$('#foundations-submit').attr('for', '');
	   }                                     
	})	

	$('.choose-season li').click(function(){
		$('#season').val($(this).html()).next('.error-box').html('<div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>');
		$('input#season').addClass('not_error');
	})

	$('.choose-foundations-1 li').click(function(){
		$('#brick').val($(this).html()).next('.error-box').html('<div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>');
		$('input#brick').addClass('not_error');
	})

	$('.choose-foundations-2 li').click(function(){
		$('#brush').val($(this).html()).next('.error-box').html('<div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>');
		$('input#brush').addClass('not_error');
	})

	$('.choose-foundations-3 li').click(function(){
		$('#foundation').val($(this).html()).next('.error-box').html('<div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>');
		$('input#foundation').addClass('not_error');
	})			
	

     // Устанавливаем обработчик потери фокуса для всех полей ввода текста

     $('input#length, input#width').blur( function(){
		validate(this);
     }); // end blur()

     function validate(el) {

        // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные
         var id = $(el).attr('id');
         var val = $(el).val();

       // После того, как поле потеряло фокус, перебираем значения id, совпадающие с id данного поля
       switch(id)
       {
             // Проверка поля "length"
             case 'length':
                var rv_name = /^[0-9 ]+$/; // только цыфры
                var let_numb = /^[а-яА-ЯёЁa-zA-Z0-9]+$/; // цыфры и буквы

                // Eсли длина имени больше 2 символов, оно не пустое и удовлетворяет рег. выражению,
                // то добавляем этому полю класс .not_error,
                // и ниже в контейнер для ошибок выводим слово " Принято", т.е. валидация для этого поля пройдена успешно

                if(val != '' && rv_name.test(val))
                {
                   $(el).addClass('not_error');
                   $(el).next('.error-box').html('<div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>')
                                             .css('color','green')
                                             .animate({'paddingLeft':'10px'},400)
                                             .animate({'paddingLeft':'5px'},400);
                }

              // Иначе, мы удаляем класс not-error и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
              // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации

                else
                {
                   $(el).removeClass('not_error').addClass('error');
                   $(el).next('.error-box').html('<div class="err">Пожалуйста заполните это поле</div>')
                                              .css('color','#393939')
                                              .animate({'paddingLeft':'10px'},400)
                                              .animate({'paddingLeft':'5px'},400);
                }
            break;

           // Проверка width
           case 'width':
               var rv_email = /^[0-9 ]+$/;
               if(val != '' && rv_email.test(val))
               {
                  $(el).addClass('not_error');
                  $(el).next('.error-box').html('<div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>')
                                            .css('color','green')
                                            .animate({'paddingLeft':'10px'},400)
                                            .animate({'paddingLeft':'5px'},400);
               }
               else
               {
                  $(el).removeClass('not_error').addClass('error');
                  $(el).next('.error-box').html('<div class="err">Пожалуйста заполните это поле</div>')
                                             .css('color','#393939')
                                             .animate({'paddingLeft':'10px'},400)
                                             .animate({'paddingLeft':'5px'},400);
               }
           break;


          // Проверка поля "season"
          case 'season':
              if(val != '' && val.length < 5000)
              {
                 $(el).addClass('not_error');
                 $(el).next('.error-box').html('<div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>')
                                           .css('color','green')
                                           .animate({'paddingLeft':'10px'},400)
                                           .animate({'paddingLeft':'5px'},400);
              }
              else
              {
                 $(el).removeClass('not_error').addClass('error');
                 $(el).next('.error-box').html('<div class="err">Пожалуйста заполните это поле</div>')
                                           .css('color','#393939')
                                           .animate({'paddingLeft':'10px'},400)
                                           .animate({'paddingLeft':'5px'},400);
              }
          break;

       } // end switch(...)	   

	   if($('input#length').hasClass('not_error') &
	   		$('input#width').hasClass('not_error') & 
				$('input#season').hasClass('not_error')) {
       		$('#sizes-submit').attr('for', 'tab-nav-2');
	   }
	   else {
	   		$('#sizes-submit').attr('for', '');
	   }
     }

     $('input#f_name, input#f_phone').blur( function(){
		validateContacts(this);
     }); // end blur()

     $('#send-form').click(function(){
     	validateContacts($('input#f_name, input#f_phone'));
     })

     function validateContacts(el) {
         var id = $(el).attr('id');
         var val = $(el).val();

       // После того, как поле потеряло фокус, перебираем значения id, совпадающие с id данного поля
       switch(id)
       {
             // Проверка поля "length"
             case 'f_name':
             
                if(val != '') {
                   $(el).addClass('not_error');
                   $(el).next('.error-box').html('<div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>')
                                             .css('color','green')
                                             .animate({'paddingLeft':'10px'},400)
                                             .animate({'paddingLeft':'5px'},400);
                }

              // Иначе, мы удаляем класс not-error и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
              // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации

                else {
                   $(el).removeClass('not_error').addClass('error');
                   $(el).next('.error-box').html('<div class="err">Пожалуйста заполните это поле</div>')
                                              .css('color','#393939')
                                              .animate({'paddingLeft':'10px'},400)
                                              .animate({'paddingLeft':'5px'},400);
                }
            break;

           // Проверка 

           case 'f_phone':

           var rv_phone = /\s\W\d/; // только цыфры

               if(val.length > 2 && val != '' && rv_phone.test(val)) {
                  $(el).addClass('not_error');
                  $(el).next('.error-box').html('<div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>')
                                            .css('color','green')
                                            .animate({'paddingLeft':'10px'},400)
                                            .animate({'paddingLeft':'5px'},400);
               }
               else {
                  $(el).removeClass('not_error').addClass('error');
                  $(el).next('.error-box').html('<div class="err">Пожалуйста заполните это поле</div>')
                                             .css('color','#393939')
                                             .animate({'paddingLeft':'10px'},400)
                                             .animate({'paddingLeft':'5px'},400);
               }
           break;
       } // end switch(...)	    

	   if($('input#f_name').hasClass('not_error') &
	   		$('input#f_phone').hasClass('not_error')) {
       		$('#send-form').attr('for', 'tab-nav-4');
	   }
	   else {
	   		$('#send-form').attr('for', '');
	   }          	
     }

     $("#f_phone").mask("+9 (999) 999 99 99");
     $("#form-tel").mask("+9 (999) 999 99 99");
     

  $('.inp-block input').focus(function(){
      $(this).parent().children('ul').show();
  });

  $('.txt').click(function(){
    var txt = $(this).text();
    var input = $(this).parent().parent().children('input');
    input.val(txt);
    $(this).parent().parent().children('ul').hide();
  })
  
  $('.inp-block input').blur(function(){
      $(this).parent().children('ul').fadeOut(300); 
  });

  // sliders
 
 $('#slick-slider-outer').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '#slick-slider-inner'
});
$('#slick-slider-inner').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '#slick-slider-outer',
  focusOnSelect: true
});
  
$('.wr_2').slick({
  slidesToShow: 1,
  slidesToScroll: 1
});



$('#lightSlider_2').lightSlider({
    gallery: true,
    item: 1,
    loop: true,
    slideMargin: 0,
    thumbItem: 9
});

$('#lightSlider_2').lightSlider({
    gallery: true,
    item: 1,
    loop: true,
    slideMargin: 0,
    thumbItem: 9
});

  var w1 = $('#n-1').width();
  $('#n-1').width(w1);

  var w2 = $('#n-2').width();
  $('#n-2').width(w2);

  var w3 = $('#n-3').width();
  $('#n-3').width(w3);

  var w4 = $('#n-4').width();
  $('#n-4').width(w4);

  var w5 = $('#n-5').width();
  $('#n-5').width(w5);

  // $('.n-1').animateNumber({ number: 1000 });


  // map

    ymaps.ready(init); // карта соберется после загрузки скрипта и элементов
        var myMap; // заглобалим переменную карты чтобы можно было ею вертеть из любого места
        function init () { // функция - собиралка карты и фигни
            myMap = new ymaps.Map("map", { // создаем и присваиваем глобальной переменной карту и суем её в див с id="map"
                    center: [60.00808710199225,32.15604568721752], // ну тут центр 
                    zoom: 16 // тут масштаб
                });
            // myMap.controls // добавим всяких кнопок, в скобках их позиции в блоке
            // .add('zoomControl', { left: 5, top: 5 }) //Масштаб
            // .add('typeSelector') //Список типов карты
            // .add('mapTools', { left: 35, top: 5 }) // Стандартный набор кнопок
            // .add('searchControl'); // Строка с поиском
          /* Создаем кастомные метки */
          myPlacemark0 = new ymaps.Placemark([60.00808710199225,32.15604568721752], { // Создаем метку с такими координатами и суем в переменную
                  balloonContent: '<div class="ballon"><img src="img/hh.jpg" class="ll"/><span>Заголовок метки 1</span><br/><p>Немного инфы о том, о сем. Лорем ипсум чото там.</p><img class="close" onclick="myMap.balloon.close()" src="img/close.png"/></div>' // сдесь содержимое балуна в формате html, все стили в css
                }, {
                iconImageHref: 'img/map-tag.png', // картинка иконки
                iconImageSize: [36, 56], // размер иконки
                iconImageOffset: [-232, -64], // позиция иконки
                  balloonContentSize: [270, 99], // размер нашего кастомного балуна в пикселях
                  balloonLayout: "default#imageWithContent", // указываем что содержимое балуна кастомная херь
                  balloonImageHref: 'img/map-tag.png', // Картинка заднего фона балуна
                  balloonImageOffset: [-65, -89], // смещание балуна, надо подогнать под стрелочку
                  balloonImageSize: [260, 89], // размер картинки-бэкграунда балуна
                  balloonShadow: false,
                  balloonAutoPan: false // для фикса кривого выравнивания
                  });
          /* Добавляем */
          myMap.geoObjects
            .add(myPlacemark0)

          /* Фикс кривого выравнивания кастомных балунов */
      myMap.geoObjects.events.add([
            'balloonopen'
        ], function (e) {
            var geoObject = e.get('target');
            myMap.panTo(geoObject.geometry.getCoordinates(), {
                                        delay: 0
                                    });
        });
    }




    $('#next-step').click(function(){
      var slider = $("#lightSlider_2").lightSlider();  
      slider.goToSlide(3);
    })
    
    $('.carousel').carousel({
      interval: false
    });

    $(window).on('load resize', function(){
      var c_b_r = $('.container').offset().left;
      $('.contacts-block').css('right', c_b_r);
      $('.hidden-on-hover').height($(window).height()-250);
    })

    $('.look').click(function(){
      $('.hidden-on-hover').show();
    })
    $('.look').mouseover(function(){
      $('.hidden-on-hover').show();
    })
    $('.close-hidden').click(function(){
      $('.hidden-on-hover').hide();
    })

// smoothScroll.init({
//     selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
//     selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector) [optional]
//     speed: 200, // Integer. How fast to complete the scroll in milliseconds
//     easing: 'easeInSine', // Easing pattern to use
    
//     callback: function ( anchor, toggle ) {} // Function to run after scrolling
// });    


$('header a[href^="#"]').on('click',function(e) {    
  e.preventDefault();
  var target = this.hash;
  var topHeader = $('.top-header').height();
  $target = $(target);    
  $('html, body').stop().animate({        
    'scrollTop':  $target.offset().top -topHeader
  }, 900, 'swing', function () {        
    window.location.hash = target;    
  });  
});

  //  mobile button menu
  $('.mobile-menu').click(function() {
    $(this).toggleClass('active');
  });
  $('.mobile-menu + .top-nav li a').click(function() {
    $('.mobile-menu').toggleClass('active');
  });

    //scroll header

    $(window).scroll(function(){
      var innewWidth = $(this).width();
      if(innewWidth > 1050) {
        if ( $(this).scrollTop() > 40) {
          $('.header-fixed').addClass('bfff');
        } else if($(this).scrollTop() <= 40) {
          $('.header-fixed').removeClass('bfff');
        }
      }
    });


$('.call-me-open').click(function(){
  $('.call-me').show();
  $('.mask-dark').show();
  $('body').addClass('no-scroll');
})

$('.ind-pop-open').click(function(e){
  e.preventDefault();
  $('.ind-pop').show();
  $('.mask-dark').show();
  $('body').addClass('no-scroll');
})

$('.close').click(function(){
  $('body').removeClass('no-scroll');
  $('.mask-dark').hide();
  $('.popup').hide();
  $('.hidden-on-hover').hide();
})

$('.mask-dark').click(function(){
  $(this).hide();
  $('.popup').hide();
  $('body').removeClass('no-scroll');
})

$('.details').click(function(e){
  e.preventDefault();
  var id = $(this).attr('data-id');
  $('#' + id).show();
  $('.mask-dark').show();
  $('body').addClass('no-scroll');  
})

// popup slider
   $('.popup-slider').slick({
      asNavFor: '.popup-thumbs-slider',
      initialSlide: 0
   })

   $('.popup-thumbs-slider').slick({
      asNavFor: '.popup-slider',
      slidesToShow: 5,
      focusOnSelect: true
   })  

}(jQuery));