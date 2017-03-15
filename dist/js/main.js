(function ($) {



	$('#sizes-submit').click(function(){
		validate($('input#length, input#width, input#season'));
	})

     // Устанавливаем обработчик потери фокуса для всех полей ввода текста

     $('input#length, input#width, input#season').unbind().blur( function(){
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

                // Eсли длина имени больше 2 символов, оно не пустое и удовлетворяет рег. выражению,
                // то добавляем этому полю класс .not_error,
                // и ниже в контейнер для ошибок выводим слово " Принято", т.е. валидация для этого поля пройдена успешно

                if(val.length > 2 && val != '' && rv_name.test(val))
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
}(jQuery));