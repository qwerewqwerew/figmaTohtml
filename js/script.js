$('.mo .menu').hide();
$('.mo_btn').on('click', () => {
	$('.mo .menu').stop().slideToggle(500);
	$('.fa-bars').toggleClass('fa-x', '.fa-bars');
	return false;
});
