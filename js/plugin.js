$(document).ready(function() {

	$(".extra").click(function() {

		if ($(this).hasClass('opened') == true ) {
			$(".drop-down").fadeOut(200);
			$(".extra").removeClass('opened');

		} else {

			$(".drop-down").fadeIn(200);
			$(".extra").addClass('opened');

		}

	});


	$('ul.tabs li a').click(  function ()  {
		tab_link_name = $(this).parent().data('tablinkvar');
		$('ul.tabs li a').parent().removeClass('now');
		$(this).parent().addClass('now');
		$('div.tab-link').hide();
		$('div.' + tab_link_name + '').show();
	});



	// $(".tab1").click(function() {
	// 	$(".tab-link1").show();
	// 	$(".tab-link2").hide();
	// 	$(".tab-link3").hide();			
	// 	$(".tab-link4").hide();
	// 	$(".tab1").addClass("now");
	// 	$(".tab2").removeClass("now");		
	// 	$(".tab3").removeClass("now");		
	// 	$(".tab4").removeClass("now");		

	// });

	// $(".tab2").click(function() {
	// 	$(".tab-link1").hide();
	// 	$(".tab-link2").show();
	// 	$(".tab-link3").hide();
	// 	$(".tab-link4").hide();
	// 	$(".tab2").addClass("now");
	// 	$(".tab1").removeClass("now");		
	// 	$(".tab3").removeClass("now");		
	// 	$(".tab4").removeClass("now");		
	// });

	// $(".tab3").click(function() {
	// 	$(".tab-link1").hide();
	// 	$(".tab-link2").hide();
	// 	$(".tab-link3").show();
	// 	$(".tab-link4").hide();
	// 	$(".tab1").removeClass("now");		
	// 	$(".tab2").removeClass("now");		
	// 	$(".tab3").addClass("now");		
	// 	$(".tab4").removeClass("now");		

	// });

	// $(".tab4").click(function() {
	// 	$(".tab-link1").hide();
	// 	$(".tab-link2").hide();
	// 	$(".tab-link3").hide();
	// 	$(".tab-link4").show();
	// 	$(".tab1").removeClass("now");		
	// 	$(".tab2").removeClass("now");		
	// 	$(".tab3").removeClass("now");		
	// 	$(".tab4").addClass("now");		

	// });

	/* the table */
	$(".lat-company").click(function() {

		if ($(this).hasClass('opened') == true ) {
			$(".table-content").fadeOut(200);
			$(".lat-company").removeClass('opened');

		} else {

			$(".table-content").fadeIn(200);
			$(".lat-company").addClass('opened');

		};


	});
	/* end the table */
	$(".bars").click(function(){
		$(".slide-menu").hide(400);
		$(".user-profile").animate({paddingLeft:'140px'},3000);
	});

	$(".anime .focus").click(function(){
		$(".anime .para").slideToggle();
	});

	$(".sec-anime").click(function(){
		$(".anime .para2").slideToggle();
	});
	$(".third-anime").click(function(){
		$(".para3").slideToggle();
	});

	$(".fourth-anime").click(function(){
		$(".para4").slideToggle();
	});

	$(".fifth-anime").click(function(){
		$(".para5").slideToggle();
	});

	$(".sec6-anime").click(function(){
		$(".para6").slideToggle();
	});

	$(".sec7-anime").click(function(){
		$(".para7").slideToggle();
	});

	$(".anime .first-anime").click(function(){
		$(".paras").slideToggle();
	});


});
