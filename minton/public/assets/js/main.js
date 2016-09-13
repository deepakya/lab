$(document).ready(function() {
	// sidebar toggle
	$('.sidebar-toggle').on('click',function(){
		$('.main-wrapper').toggleClass('hide-sidebar');
	});
	// topbar menu
	$('.topbar-toggle').on('click',function(){
		$('.topbar-inner').slideToggle();
	});
	// sidebar menu
	$('.sidebar-menu a').on('click',function(){
		$('.sidebar-menu li').removeClass('active');
		$(this).parent('li').addClass('active');
	});
});
