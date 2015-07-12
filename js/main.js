$(document).ready(function() {

	//DropDown function
	   $("#topNav > li").mouseover(function(){
	      $(this).children(".dropdown").show();
	      $(this).mouseleave(function(){
	            $(this).children(".dropdown").hide();
	      });
	   });



	// Узнаем сколько слайдов

		var lengthSlides = $("#slider ul li").length;

	// Устанавливаем ширину #slider ul

		var widthSlide = $("#slider ul li").width(); // Ширина слайда

		var widthSlides = widthSlide * lengthSlides; // Общая ширина слайдов

		$("#slider ul").width(widthSlides); // Устанавливаем ширину

	// Чтобы слайдер сам листал, а если наведен курсор остановился

		var inter = setInterval(nextSlide,3000);

		$("#slider").hover(function() {

			clearInterval(inter); // Если был наведен курсор на слайдер, очищаем слайдер

		}, function() {

			inter = setInterval(nextSlide,3000); // Если уведен курсор, ставим таймер

		});

	// Функция для переключения слайда вперед

		function nextSlide () {

			// Получаем текущий слайд с атрибута data-

				var currentSlide = $("#slider").data('slide');

			// Если это последний слайд

				if ( currentSlide == lengthSlides ) 

					currentSlide = 0; // То как потом станет 1

			// Двигаем холст с слайдами

				$("#slider ul").animate({
										'left': - (currentSlide * widthSlide)
										}, 700);

			// Устанавливаем новое значения текущего слайда

				currentSlide++;

				$("#slider").data('slide',currentSlide);

		}


	// Функция для переключения слайда назад

		function prevSlide () {

			// Узнаем какой показывать

				var currentSlide = $("#slider").data('slide') - 1;

			// Если это ниже первого слайд

				if ( currentSlide == 0 ) 

					currentSlide = lengthSlides;

			// Двигаем холст с слайдами (нужно слайдер сдвинуть еще на один)

				$("#slider ul").animate({
										'left': - ((currentSlide - 1) * widthSlide)
										}, 700);				
				

			// Устанавливаем новое значения текущего слайда

				$("#slider").data('slide',currentSlide);

		}
});