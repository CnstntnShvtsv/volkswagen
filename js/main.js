// Модальное окно

// открыть по кнопке
$('#btn_modal-01').click(function () {
	$('#modal-01').fadeIn();
	$('#modal-01').addClass('disabled');
	$('body').css('overflow', 'hidden');
});

$('#btn_modal-02').click(function () {
	$('#modal-02').fadeIn();
	$('#modal-02').addClass('disabled');
	$('body').css('overflow', 'hidden');
});

$('#btn_modal-03').click(function () {
	$('#modal-03').fadeIn();
	$('#modal-03').addClass('disabled');
	$('body').css('overflow', 'hidden');
});

$('#btn_modal-04').click(function () {
	$('#modal-04').fadeIn();
	$('#modal-04').addClass('disabled');
	$('body').css('overflow', 'hidden');
});

$('#btn_modal-05').click(function () {
	$('#modal-05').fadeIn();
	$('#modal-05').addClass('disabled');
	$('body').css('overflow', 'hidden');
});

$('#btn_modal-06').click(function () {
	$('#modal-06').fadeIn();
	$('#modal-06').addClass('disabled');
	$('body').css('overflow', 'hidden');
});

$('#btn_modal-07').click(function () {
	$('#modal-07').fadeIn();
	$('#modal-07').addClass('disabled');
	$('body').css('overflow', 'hidden');
});

$('#btn_modal-08').click(function () {
	$('#modal-08').fadeIn();
	$('#modal-08').addClass('disabled');
	$('body').css('overflow', 'hidden');
});

$('#btn_modal-09').click(function () {
	$('#modal-09').fadeIn();
	$('#modal-09').addClass('disabled');
	$('body').css('overflow', 'hidden');
});

$('#btn_modal-10').click(function () {
	$('#modal-10').fadeIn();
	$('#modal-10').addClass('disabled');
	$('body').css('overflow', 'hidden');
});

$('#btn_modal-11').click(function () {
	$('#modal-11').fadeIn();
	$('#modal-11').addClass('disabled');
	$('body').css('overflow', 'hidden');
});

$('#btn_modal-12').click(function () {
	$('#modal-12').fadeIn();
	$('#modal-12').addClass('disabled');
	$('body').css('overflow', 'hidden');
});

$('#btn_modal-13').click(function () {
	$('#modal-13').fadeIn();
	$('#modal-13').addClass('disabled');
	$('body').css('overflow', 'hidden');
});

$('#btn_modal-14').click(function () {
	$('#modal-14').fadeIn();
	$('#modal-14').addClass('disabled');
	$('body').css('overflow', 'hidden');
});

$('.btn_popup-01').click(function () {
	$('#popup-01').fadeIn();
	$('#popup-01').addClass('disabled');
	$('body').css('overflow', 'hidden');
});


// закрыть на крестик
$('.close-btn').click(function () {
	$('.modal-wrapper').fadeOut();
	$('body').css('overflow', 'auto');
});


// закрыть по клику вне окна
// $(document).mouseup(function (e) {
// 	var popup = $('.modal');
// 	if (e.target != popup[0] && popup.has(e.target).length === 0) {
// 		$('.modal-wrapper').fadeOut();
// 		$('body').css('overflow', 'auto');
// 	}
// });

// $(document).mouseup(function (e) {
// 	var popup = $('.popup');
// 	if (e.target != popup[0] && popup.has(e.target).length === 0) {
// 		$('.modal-wrapper').fadeOut();
// 		$('body').css('overflow', 'auto');
// 	}
// });